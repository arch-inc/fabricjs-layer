/*!
 * Copyright (c) 2020 Arch Inc. (Jun Kato)
 *
 * fabricjs-layer, lightweight layer management for Fabric.js
 * @license MIT
 */
import Layer, { LayerIface } from "./Layer";

const fabricjs: typeof fabric =
  typeof fabric === "undefined" ? require("fabric").fabric : fabric;

class LayerManager {
  activeLayer: LayerIface;
  constructor(private canvas: fabric.StaticCanvas) {
    this.activeLayer = new Layer();
    canvas.on("object:added", (e) => {
      // monitor object addition
      console.log("added", e);
    });
    canvas.on("object:removed", (e) => {
      // monitor object deletion
      console.log("removed", e);
    });
  }
}

// (fabricjs as any).LayerManager = LayerManager;
export default LayerManager;
