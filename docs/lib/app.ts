import { fabric } from "fabric";
import { PSBrush, PSBrushIface, PSStroke } from "@arch-inc/fabricjs-psbrush";
import { LayerManager } from "../../";

/**
 * Deadly simple drawing app
 */
class App {
  private canvas: fabric.Canvas;
  private brush: PSBrushIface;
  private manager: LayerManager;

  private _erasing: boolean;
  public get erasing() {
    return this._erasing;
  }
  public set erasing(value: boolean) {
    this._erasing = value;
    if (!this.brush) {
      return;
    }
    this.brush.color = value ? "#c00" : "#000";
  }

  constructor(private el: HTMLCanvasElement) {
    this.initialize();
  }

  /**
   * Initialize this drawing app
   */
  private initialize() {
    // Create a Fabric.js canvas
    const canvas = new fabric.Canvas(this.el, {
      isDrawingMode: true,
      enablePointerEvents: true
    } as fabric.ICanvasOptions & { enablePointerEvents?: boolean });

    // Initialize a brush
    this.brush = new PSBrush(canvas);
    this.brush.width = 10;
    this.brush.color = "#000";
    canvas.freeDrawingBrush = this.brush;

    // Set property
    this.canvas = canvas;
    this.manager = new LayerManager(canvas);
    console.log("initialized");

    // Set listeners
    canvas.on("object:added", ({ target }) => {
      if (!(target instanceof PSStroke)) {
        return;
      }
      if (this.erasing) {
        const path = target;
        path.globalCompositeOperation = "destination-out";
        path.stroke = "#000";
        path.selectable = false;
        path.evented = false;
      }
    });
    // canvas.on("object:removed", (e) => {
    //   // monitor object deletion
    //   console.log("removed", e);
    // });
  }

  /**
   * Dispose this drawing app
   */
  public dispose() {
    if (!this.canvas) {
      return;
    }
    this.canvas.dispose();
    this.canvas = null;
    this.brush = null;
    console.log("disposed");
  }
}

export { App };
