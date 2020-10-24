!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).layer={})}(this,(function(e){"use strict";
/*!
   * Copyright (c) 2020 Arch Inc. (Jun Kato)
   *
   * fabricjs-layer, a lightweight layer implementation for Fabric.js
   * @license MIT
   */var t="undefined"==typeof fabric?require("fabric").fabric:fabric,i=t.util.createClass(t.Group,{type:"LayerGroup",createdTime:null,initialize:function(e,t,i){t=t||{},this.callSuper("initialize",e,t,i),this.createdTime=t.createdTime},toObject:function(e){return this.callSuper("toObject",["createdTime"].concat(e))}});i.fromObject=function(e,i){t.util.enlivenObjects(e.objects,(function(r){t.util.enlivenObjects([e.clipPath],(function(o){var c=t.util.object.clone(e,!0);c.clipPath=o[0],delete c.objects,i&&i(new n(r,c,!0))}),null,null)}),null,null)};var n=i;t.LayerGroup=n,e.LayerGroup=n,e.isLayerGroup=function(e){return e&&"LayerGroup"===e.type},Object.defineProperty(e,"__esModule",{value:!0})}));
