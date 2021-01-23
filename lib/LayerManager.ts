/*!
 * Copyright (c) 2020 Arch Inc. (Jun Kato)
 *
 * fabricjs-layer, lightweight layer management for Fabric.js
 * @license MIT
 */
import Layer, { LayerIface } from "./Layer";
import { LayerManagerEvent } from "./LayerManagerEvent";
import { LayerManagerEventListener } from "./LayerManagerEventListener";
import { getIndexOf } from "./utils";

const fabricjs: typeof fabric =
  typeof fabric === "undefined" ? require("fabric").fabric : fabric;

export interface LayerManagerIface {
  activeLayer: LayerIface;
  activeLayerIndex: number;
  readonly layers: LayerIface[];
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
    this._activeLayerIndex = index;
    this._activeLayer = value as Layer;
  }
  private _activeLayer: Layer;

  public get activeLayerIndex() {
    return this._activeLayerIndex;
  }
  public set activeLayerIndex(value: number) {
    if (value < 0 || value >= this._layers.length) {
      throw new Error("Layer index out of bounds");
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

  private _listeners: LayerManagerEventListener[];

  constructor(private canvas: fabric.StaticCanvas) {
    this._activeLayer = new Layer(canvas);
    this._layers = [this._activeLayer];
    this.onObjectAdd = this.onObjectAdd.bind(this);
    this.onObjectRemove = this.onObjectRemove.bind(this);
    canvas.on("object:added", this.onObjectAdd);
    canvas.on("object:removed", this.onObjectRemove);
  }

  /**
   * Monitor object addition
   *
   * @param e - Fabric.js event
   */
  private onObjectAdd({ target }: fabric.IEvent) {
    const index = getIndexOf(target, this.canvas._objects);
    console.log("added", target, "index", index);
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
