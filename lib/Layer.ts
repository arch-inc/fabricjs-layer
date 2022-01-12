/*!
 * Copyright (c) 2020-2022 Arch Inc. (Jun Kato)
 *
 * fabricjs-layer, lightweight layer management for Fabric.js
 * @license MIT
 */

import { LayerEvent } from "./LayerEvent";
import { LayerEventListener } from "./LayerEventListener";

/**
 * Layer representation
 */
export interface LayerIface {
  type: "Layer";
  createdTime: number;
  startIndex: number;
  endIndex: number;
  addListener(listener: LayerEventListener): void;
  removeListener(listener: LayerEventListener): boolean;
}

class Layer implements LayerIface {
  type: "Layer";
  createdTime: number;
  startIndex: number;
  endIndex: number;

  private _listeners: LayerEventListener[];

  constructor(private canvas: fabric.StaticCanvas) {
    this.type = "Layer";
    this.createdTime = Date.now();
    this.startIndex = this.endIndex = canvas._objects.length;
    this._listeners = [];
  }

  public addListener(listener: LayerEventListener): void {
    const index = this._listeners.indexOf(listener);
    if (index >= 0) {
      return;
    }
    this._listeners.push(listener);
  }

  public removeListener(listener: LayerEventListener): boolean {
    const index = this._listeners.indexOf(listener);
    if (index < 0) {
      return false;
    }
    this._listeners.splice(index, 1);
    return true;
  }

  public fire(e: LayerEvent): void {
    this._listeners.forEach(listener => {
      switch (e.type) {
        case "object:add":
          listener.onObjectAdd && listener.onObjectAdd(e);
          break;
        case "object:remove":
          listener.onObjectRemove && listener.onObjectRemove(e);
          break;
      }
    });
  }
}

export default Layer;
