/*!
 * Copyright (c) 2020 Arch Inc. (Jun Kato)
 *
 * fabricjs-layer, lightweight layer management for Fabric.js
 * @license MIT
 */
import { sortedIndex } from "sortedindex";
import Layer, { LayerIface } from "./Layer";
import { LayerEvent } from "./LayerEvent";
import { LayerManagerEvent } from "./LayerManagerEvent";
import { LayerManagerEventListener } from "./LayerManagerEventListener";
import { getIndexOf } from "./utils";

const fabricjs: typeof fabric =
  typeof fabric === "undefined" ? require("fabric").fabric : fabric;

export interface LayerManagerIface {
  activeLayer: LayerIface;
  activeLayerIndex: number;
  readonly layers: LayerIface[];
  readonly layersLength: number;
  findLayer(object: fabric.Object): LayerIface;
  getLayer(index: number): LayerIface;
  getLayerIndex(layer: LayerIface): number;
  addLayer(index?: number): LayerIface;
  removeLayer(layer: LayerIface): boolean;
  removeLayerByIndex(index: number): void;
  moveLayer(from: number, to: number): void;
  addListener(listener: LayerManagerEventListener): void;
  removeListener(listener: LayerManagerEventListener): boolean;
  dispose(): void;
}

class LayerManager implements LayerManagerIface {
  public get activeLayer(): LayerIface {
    return this._activeLayer;
  }
  public set activeLayer(value: LayerIface) {
    const index = getIndexOf(value, this._layers);
    if (index < 0) {
      throw new Error("Layer not found or managed");
    }
    this.activeLayerIndex = index;
  }
  private _activeLayer: Layer;

  public get activeLayerIndex() {
    return this._activeLayerIndex;
  }
  public set activeLayerIndex(value: number) {
    if (value < 0 || value >= this._layers.length) {
      throw new Error("Layer index out of bounds");
    }
    if (this._activeLayerIndex === value) {
      return;
    }
    this._activeLayerIndex = value;
    this._activeLayer = this._layers[value];
    this.fire({
      type: "layer:activate",
      layer: this._layers[value]
    });
  }
  private _activeLayerIndex: number;

  public get layers(): LayerIface[] {
    return this._layers.slice();
  }
  public set layers(_value: LayerIface[]) {
    throw new Error("Layers property cannot be set directly.");
  }
  private _layers: Layer[];

  public get layersLength() {
    return this._layers.length;
  }

  private _listeners: LayerManagerEventListener[];

  constructor(private canvas: fabric.StaticCanvas) {
    this._activeLayer = new Layer(canvas);
    this._activeLayerIndex = 0;
    this._layers = [this._activeLayer];
    this._listeners = [];
    this.onObjectAdd = this.onObjectAdd.bind(this);
    this.onObjectRemove = this.onObjectRemove.bind(this);
    canvas.on("object:added", this.onObjectAdd);
    canvas.on("object:removed", this.onObjectRemove);
  }

  public findLayer(object: fabric.Object): LayerIface {
    const index = this.canvas._objects.indexOf(object);
    if (index < 0) {
      throw new Error("Object not found");
    }
    const layerIndex = sortedIndex<{ endIndex: number }>(
      this._layers,
      { endIndex: index },
      l => l.endIndex
    );
    return this._layers[layerIndex];
  }

  public getLayer(index: number): LayerIface {
    if (index < 0 || index > this._layers.length) {
      throw new Error("Layer index out of bounds");
    }
    return this._layers[index];
  }

  public getLayerIndex(layer: LayerIface): number {
    return this._layers.indexOf(layer as Layer);
  }

  public addLayer(index?: number): LayerIface {
    if (typeof index === "number") {
      if (index < 0 || index > this._layers.length) {
        throw new Error("Layer index out of bounds");
      }
    } else {
      index = this._layers.length;
    }

    // create layer and set initial index values
    const layer = new Layer(this.canvas);
    if (index > 0) {
      if (index >= this._layers.length) {
        layer.startIndex = this._layers[this._layers.length - 1].endIndex;
      } else {
        layer.startIndex = this._layers[index].startIndex;
      }
    }
    layer.endIndex = layer.startIndex;

    // insert layer
    this._layers.splice(index, 0, layer);

    // fire event
    this.fire({
      type: "layer:add",
      layer: layer
    });
    return layer;
  }

  public removeLayer(layer: LayerIface): boolean {
    const index = this.getLayerIndex(layer);
    if (index < 0) {
      return false;
    }
    this.removeLayerByIndex(index);
    return true;
  }

  public removeLayerByIndex(index: number) {
    const layer = this.getLayer(index);
    this._layers.splice(index, 1);

    // remove objects from canvas
    const deleteCount = layer.endIndex - layer.startIndex;
    this.canvas._objects.splice(layer.startIndex, deleteCount);
    this.canvas.renderOnAddRemove && this.canvas.requestRenderAll();

    // decrement startIndex and endIndex of subsequent layers
    for (let i = index; i < this._layers.length; i++) {
      this._layers[i].startIndex -= deleteCount;
      this._layers[i].endIndex -= deleteCount;
    }

    // update active layer
    if (index > 0) {
      this.activeLayerIndex = index - 1;
    } else {
      if (this._layers.length <= 0) {
        this.addLayer(0);
      }
      this.activeLayerIndex = 0;
    }

    // fire event
    this.fire({
      type: "layer:remove",
      layer
    });
  }

  public moveLayer(from: number, to: number) {
    const layer = this.getLayer(from);
    this._layers.splice(from, 1);

    // move objects within canvas
    const objectCount = layer.endIndex - layer.startIndex;
    const removed = this.canvas._objects.splice(layer.startIndex, objectCount);
    let toIndex: number;
    if (to < from) {
      toIndex = this.getLayer(to).startIndex;
      this.canvas._objects.splice(toIndex, 0, ...removed);

      // increment startIndex and endIndex of affected layers
      for (let i = to; i < from; i++) {
        this._layers[i].startIndex += objectCount;
        this._layers[i].endIndex += objectCount;
      }
    } else {
      toIndex = this.getLayer(to - 1).endIndex - objectCount;
      this.canvas._objects.splice(toIndex, 0, ...removed);

      // decrement startIndex and endIndex of affected layers
      for (let i = from; i < to; i++) {
        this._layers[i].startIndex -= objectCount;
        this._layers[i].endIndex -= objectCount;
      }
    }
    // set startIndex and endIndex of moving layer
    layer.startIndex = toIndex;
    layer.endIndex = toIndex + objectCount;

    this._layers.splice(to, 0, layer as Layer);
    this.canvas.renderOnAddRemove && this.canvas.requestRenderAll();

    // fire event
    this.fire({
      type: "layer:move",
      layer,
      options: {
        from,
        to
      }
    });

    // update active layer
    this.activeLayerIndex = to;
  }

  /**
   * Monitor object addition
   *
   * @param e - Fabric.js event
   */
  private onObjectAdd(e: fabric.IEvent) {
    const index = getIndexOf(e.target, this.canvas._objects);

    // check object position in the stack
    if (index < this._activeLayer.startIndex) {
      // object needs to be pushed to foreground
      this.canvas._objects.splice(index, 1);
      this.canvas._objects.splice(this._activeLayer.endIndex, 0, e.target);
      this.canvas.renderOnAddRemove && this.canvas.requestRenderAll();
    } else if (index > this._activeLayer.endIndex + 1) {
      // object needs to be pushed to background
      this.canvas._objects.splice(index, 1);
      this.canvas._objects.splice(this._activeLayer.endIndex, 0, e.target);
      this.canvas.renderOnAddRemove && this.canvas.requestRenderAll();
    } else {
      this._activeLayer.endIndex++;
    }

    // increment startIndex and endIndex of subsequent layers
    for (let i = this.activeLayerIndex + 1; i < this._layers.length; i++) {
      this._layers[i].startIndex++;
      this._layers[i].endIndex++;
    }

    // fire object:add event
    const le: LayerEvent = {
      type: "object:add",
      event: e
    };
    this._activeLayer.fire(le);

    console.log("added", e.target, "to", this._activeLayer);
  }

  /**
   * Monitor object deletion
   *
   * @param e - Fabric.js event
   */
  private onObjectRemove({ target }: fabric.IEvent) {
    console.log("removed", target);
  }

  public addListener(listener: LayerManagerEventListener): void {
    const index = this._listeners.indexOf(listener);
    if (index >= 0) {
      return;
    }
    this._listeners.push(listener);
  }

  public removeListener(listener: LayerManagerEventListener): boolean {
    const index = this._listeners.indexOf(listener);
    if (index < 0) {
      return false;
    }
    this._listeners.splice(index, 1);
    return true;
  }

  public fire(e: LayerManagerEvent): void {
    this._listeners.forEach(listener => {
      switch (e.type) {
        case "layer:activate":
          listener.onLayerActivated && listener.onLayerActivated(e);
          break;
        case "layer:deactivate":
          listener.onLayerDeactivated && listener.onLayerDeactivated(e);
          break;
        case "layer:add":
          listener.onLayerAdd && listener.onLayerAdd(e);
          break;
        case "layer:remove":
          listener.onLayerRemove && listener.onLayerRemove(e);
          break;
        case "layer:move":
          listener.onLayerMove && listener.onLayerMove(e);
          break;
      }
    });
  }

  dispose() {
    this.canvas.off("object:added", this.onObjectAdd);
    this.canvas.off("object:removed", this.onObjectRemove);
    this.canvas = null;
  }
}

// (fabricjs as any).LayerManager = LayerManager;
export default LayerManager;
