/*!
 * Copyright (c) 2020 Arch Inc. (Jun Kato)
 *
 * fabricjs-layer, lightweight layer management for Fabric.js
 * @license MIT
 */
const fabricjs: typeof fabric =
  typeof fabric === "undefined" ? require("fabric").fabric : fabric;

export interface LayerIface {
  type: "Layer";
  createdTime: number;
}

class Layer implements LayerIface {
  type: "Layer" = "Layer";
  createdTime: number = Date.now();
  constructor() {}
}

// (fabricjs as any).Layer = Layer;
export default Layer;
