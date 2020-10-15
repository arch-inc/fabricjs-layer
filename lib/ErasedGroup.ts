/// <reference types="fabric" />
const fabricjs: typeof fabric =
  typeof fabric === "undefined" ? require("fabric").fabric : fabric;

export interface ErasedGroupIface extends fabric.Group {
  original: fabric.Group;
  erasedPath: fabric.Path;
  startTime: number;
  endTime: number;
  fromObject?: (object: object, callback: Function) => void;
}

const ErasedGroupImpl = <any>fabricjs.util.createClass(fabricjs.Group, {
  original: null,
  erasedPath: null,
  type: "ErasedGroup",
  startTime: null,
  endTime: null,
  initialize: function (original, erasedPath, options, isAlreadyGrouped) {
    options = options || {};
    this.original = original;
    this.erasedPath = erasedPath;
    this.callSuper(
      "initialize",
      [this.original, this.erasedPath],
      options,
      isAlreadyGrouped
    );

    this.startTime = options.startTime;
    this.endTime = options.endTime;
  },

  _calcBounds: function (onlyWidthHeight: boolean) {
    // console.log("calcBounds", this);

    const aX = [],
      aY = [],
      props = ["tr", "br", "bl", "tl"],
      jLen = props.length,
      ignoreZoom = true;

    let o = this.original;
    o.setCoords(ignoreZoom);
    for (let j = 0; j < jLen; j++) {
      const prop = props[j];
      aX.push(o.oCoords[prop].x);
      aY.push(o.oCoords[prop].y);
    }

    this._getBounds(aX, aY, onlyWidthHeight);
  },

  // cache if root of layer
  needsItsOwnCache: function () {
    return this.group && this.group.type == "LayerGroup" ? true : false;
  },

  /**
   * Returns object representation of an instance
   * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
   * @return {Object} object representation of an instance
   */
  toObject: function (propertiesToInclude: string[]): object {
    return this.callSuper(
      "toObject",
      ["startTime", "endTime"].concat(propertiesToInclude)
    );
  },

  /**
   * Returns svg representation of an instance
   * @return {Array} an array of strings with the specific svg representation
   * of the instance
   */
  _toSVG: function (): string[] {
    const gco = this.erasedPath.globalCompositeOperation,
      s = this.erasedPath.stroke;
    this.erasedPath.globalCompositeOperation = "source-over";
    this.erasedPath.stroke = "#ffffff";
    const svgString: string[] = this.callSuper("_toSVG");
    this.erasedPath.globalCompositeOperation = gco;
    this.erasedPath.stroke = s;
    return svgString;
  },
});

/**
 * https://github.com/fabricjs/fabric.js/issues/5595
 *
 * Ported from: https://codepen.io/anon/pen/byPeNQ
 * Note: Might not work with versions other than 3.1.0
 *
 * Made it so that the bound is calculated on the original only
 */
const ErasedGroup: {
  new (
    group: fabric.Group,
    path: fabric.Path,
    options?: object,
    isAlreadyGrouped?: boolean
  ): ErasedGroupIface;
  fromObject: (object: any, callback: Function) => void;
} = ErasedGroupImpl;

ErasedGroup.fromObject = function (object, callback) {
  fabricjs.util.enlivenObjects(
    object.objects,
    (enlivenedObjects) => {
      const o = enlivenedObjects.find((obj) => obj.type === "group");
      const p = enlivenedObjects.find((obj) => obj.type === "path");
      const eg = new ErasedGroup(o, p, object);
      callback && callback(eg);
    },
    null,
    null
  );
};

(fabricjs as any).ErasedGroup = ErasedGroup;
export default ErasedGroup;
