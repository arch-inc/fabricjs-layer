!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e="undefined"!=typeof globalThis?globalThis:e||self).layer={})}(this,(function(e){"use strict";
/*!
   * Copyright (c) 2020 Arch Inc. (Jun Kato)
   *
   * fabricjs-layer, lightweight layer management for Fabric.js
   * @license MIT
   */"undefined"==typeof fabric?require("fabric").fabric:fabric;var o=function(){this.type="Layer",this.createdTime=Date.now()},i=("undefined"==typeof fabric?require("fabric").fabric:fabric,function(e){this.canvas=e,this.activeLayer=new o,e.on("object:added",(function(e){console.log("added",e)})),e.on("object:removed",(function(e){console.log("removed",e)}))});e.LayerGroup=o,e.LayerManager=i,e.isLayerGroup=function(e){return e&&"Layer"===e.type},Object.defineProperty(e,"__esModule",{value:!0})}));
