/// <reference types="fabric" />
const fabricjs: typeof fabric =
  typeof fabric === "undefined" ? require("fabric").fabric : fabric;

import { Simplify } from "@arch-inc/fabricjs-psbrush";

import ErasedGroup from "./ErasedGroup";
import { getOverlappedObjects } from "./utils";

export interface EraserBrushIface extends fabric.BaseBrush {
  rasterize: boolean;
  simplifyTolerance: number;
  simplifyHighestQuality: boolean;
  scope: fabric.Group;
}

/**
 * https://github.com/fabricjs/fabric.js/issues/5595
 *
 * Ported from: https://codepen.io/anon/pen/byPeNQ
 * Note: Might not work with versions other than 3.1.0
 *
 * Made it so that the path will be 'merged' with other objects
 *  into a customized group and has a 'destination-out' composition
 */
const EraserBrush: new (
  canvas: fabric.StaticCanvas,
  options?: { Simplify: typeof Simplify }
) => EraserBrushIface = <any>fabricjs.util.createClass(fabricjs.PencilBrush, {
  rasterize: false,
  simplify: null,
  simplifyTolerance: 0,
  simplifyHighestQuality: false,
  scope: null,
  currentStartTime: null,

  /**
   * Constructor
   * @param {fabric.Canvas} canvas
   * @return {EraserBrush} Instance of a pencil brush
   */
  initialize: function (canvas, options) {
    this.simplify = new ((options && options.Simplify) || Simplify)();
    this.canvas = canvas;
    this._points = [];
  },

  /**
   * @private
   * @param {Object} pointer Actual mouse position related to the canvas.
   */
  _prepareForDrawing: function (pointer) {
    this.callSuper("_prepareForDrawing", pointer);
    this.currentStartTime = Date.now();
  },

  /**
   * On mouseup after drawing the path on contextTop canvas
   * we use the points captured to create an new fabric path object
   * and add it to the fabric canvas.
   */
  _finalizeAndAddPath: function () {
    // --- shared process with PencilBrush starts here ---
    var ctx = this.canvas.contextTop;
    ctx.closePath();

    // simplify the path
    if (this.simplifyTolerance > 0) {
      this.simplify.tolerance = this.simplifyTolerance;
      this._points = (<Simplify<fabric.Point>>this.simplify).do(
        this._points,
        this.simplifyHighestQuality
      );
    }

    if (this.decimate) {
      this._points = this.decimatePoints(this._points, this.decimate);
    }
    var pathData = this.convertPointsToSVGPath(this._points).join("");
    if (pathData === "M 0 0 Q 0 0 0 0 L 0 0") {
      // do not create 0 width/height paths, as they are
      // rendered inconsistently across browsers
      // Firefox 4, for example, renders a dot,
      // whereas Chrome 10 renders nothing
      this.canvas.requestRenderAll();
      return;
    }

    // use globalCompositeOperation to 'fake' eraser
    const path: fabric.Path = this.createPath(pathData);
    // --- shared process with PencilBrush ends here ---

    path.globalCompositeOperation = "destination-out";
    path.stroke = "#000000";
    path.selectable = false;
    path.evented = false;
    // path.absolutePositioned = true;
    // path.setCoords();

    let options: fabric.IObjectOptions;
    // if (this.scope) {
    //   // save group position before adding eraser stroke
    //   options = {
    //     left: this.scope.aCoords.tl.x,
    //     top: this.scope.aCoords.tl.y,
    //   };

    //   // update path coordinates to have group-relative values
    //   // as well as scope boundaries to reflect path boundaries
    //   this.scope.addWithUpdate(path);
    //   this.scope.remove(path);
    // } else {
    options = {};
    // }
    options["startTime"] = this.currentStartTime;
    options["endTime"] = Date.now();

    // grab all the objects that intersects with the path
    // and get group-relative position of top-left corner of the filtered objects
    const parent: fabric.Group | fabric.Canvas = this.scope || this.canvas,
      { overlapped, all } = getOverlappedObjects(parent, path);

    // calculate group position
    if (!this.rasterize) {
      if (overlapped.objects.length !== all.objects.length) {
        // const groupRelativeLeft = overlapped.topLeft.left - all.topLeft.left;
        // options.left = groupRelativeLeft;
        // const groupRelativeTop = overlapped.topLeft.top - all.topLeft.top;
        // options.top = groupRelativeTop;
        options.left = overlapped.topLeft.left;
        options.top = overlapped.topLeft.top;
      }
    }

    // found something to erase
    if (overlapped.objects.length > 0) {
      // merge those objects into a group
      const mergedGroup = new fabricjs.Group(overlapped.objects);
      const erasedGroup = new ErasedGroup(mergedGroup, path, options);

      if (this.rasterize) {
        // convert it into a dataURL, then back to a fabric image
        const newData = erasedGroup.toDataURL({
          withoutTransform: true,
        });
        fabricjs.Image.fromURL(newData, (fabricImage) => {
          fabricImage.set(overlapped.topLeft);

          // remove the old objects then add the new image
          parent.remove(...overlapped.objects);
          if (parent instanceof fabricjs.Group) {
            parent.addWithUpdate(fabricImage);
          } else {
            parent.add(fabricImage);
          }
        });
      } else {
        parent.remove(...overlapped.objects);
        // if (parent instanceof fabricjs.Group) {
        //   parent.addWithUpdate(erasedGroup);
        //
        //   // virtually call newPath.addWithUpdate(mergedGroup)
        //   mergedGroup["_calcBounds"]();
        //   mergedGroup["_updateObjectsCoords"]();
        //   mergedGroup.setCoords();
        //   mergedGroup.dirty = true;
        // } else {
        parent.add(erasedGroup);
        // }
        const objs = parent["_objects"] as fabric.Object[];
        objs.splice(objs.length - 1, 1);
        objs.splice(overlapped.index, 0, erasedGroup);
      }
      this.canvas.fire("erased-group:added", { target: erasedGroup });
      erasedGroup["fire"]("added");
    }

    // --- shared process with PencilBrush starts here ---
    this.canvas.renderAll();
    this.canvas.clearContext(this.canvas.contextTop);
    this._resetShadow();
    // --- shared process with PencilBrush ends here ---
  },
});

(fabricjs as any).EraserBrush = EraserBrush;
export default EraserBrush;
