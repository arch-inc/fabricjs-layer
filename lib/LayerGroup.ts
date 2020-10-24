/*!
 * Copyright (c) 2020 Arch Inc. (Jun Kato)
 *
 * fabricjs-layer, a lightweight layer implementation for Fabric.js
 * @license MIT
 */
const fabricjs: typeof fabric =
  typeof fabric === "undefined" ? require("fabric").fabric : fabric;

export interface LayerGroupIface extends fabric.Group {
  type: "LayerGroup";
  createdTime: number;
}

const LayerGroupImpl = fabricjs.util.createClass(fabricjs.Group, {
  type: "LayerGroup",
  createdTime: null,

  /**
   * Constructor
   * @param {Object} objects Group objects
   * @param {Object} [options] Options object
   * @param {Boolean} [isAlreadyGrouped] if true, objects have been grouped already.
   * @return {Object} thisArg
   */
  initialize: function (objects: fabric.Object[], options: any, isAlreadyGrouped: boolean) {
    options = options || {};
    this.callSuper("initialize", objects, options, isAlreadyGrouped);
    this.createdTime = options.createdTime;
  },

  /**
   * Returns object representation of an instance
   * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
   * @return {Object} object representation of an instance
   */
  toObject: function (propertiesToInclude: string[]): object {
    return this.callSuper(
      "toObject",
      ["createdTime"].concat(propertiesToInclude)
    );
  },
});

LayerGroupImpl.fromObject = function (object: any, callback: (lg: LayerGroupIface) => void) {
  fabricjs.util.enlivenObjects(
    object.objects,
    (enlivenedObjects: fabric.Object[]) => {
      fabricjs.util.enlivenObjects(
        [object.clipPath],
        function (enlivedClipPath: fabric.Object) {
          const options = (fabricjs.util.object.clone as any)(object, true);
          options.clipPath = enlivedClipPath[0];
          delete options.objects;
          callback && callback(new LayerGroup(enlivenedObjects, options, true));
        },
        null,
        null
      );
    },
    null,
    null
  );
};

/**
 * LayerGroup class
 */
const LayerGroup: {
  new (
    objects: fabric.Object[],
    options?: object,
    isAlreadyGrouped?: boolean
  ): LayerGroupIface;
  fromObject: (object: any, callback: (lg: LayerGroupIface) => void) => void;
} = LayerGroupImpl;

(fabricjs as any).LayerGroup = LayerGroup;
export default LayerGroup;
