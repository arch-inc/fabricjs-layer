/*!
 * Copyright (c) 2020 Arch Inc. (Jun Kato)
 *
 * fabricjs-layer, lightweight layer management for Fabric.js
 * @license MIT
 */
import { LayerIface } from "./Layer";

const fabricjs: typeof fabric =
  typeof fabric === "undefined" ? require("fabric").fabric : fabric;

class LayerManager {
  activeLayer: LayerIface;
  constructor(private canvas: fabric.StaticCanvas) {
    canvas.on("object:added", (e) => {
      // monitor object addition
    });
    canvas.on("object:removed", (e) => {
      // monitor object deletion
    });
  }
}

// (fabricjs as any).LayerManager = LayerManager;
export default LayerManager;
