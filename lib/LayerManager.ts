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
  addLayer(index?: number): LayerIface;
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
    if (this._activeLayerIndex === index) {
      return;
    }
    this.fire({
      type: "layer:deactivate",
      layer: this._activeLayer
    });

    this._activeLayerIndex = index;
    this._activeLayer = value as Layer;
    this.fire({
      type: "layer:activate",
      layer: value
    });
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

  /**
   * Monitor object addition
   *
   * @param e - Fabric.js event
   */
  private onObjectAdd(e: fabric.IEvent) {
    const index = getIndexOf(e.target, this.canvas._objects);

    if (index < this._activeLayer.startIndex) {
      // object needs to be pushed to foreground
    } else if (index > this._activeLayer.endIndex + 1) {
      // object needs to be pushed to background
    } else {
      this._activeLayer.endIndex++;
    }

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
