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
    this.brush.color = value ? "#c00" : this.brushColor;
  }

  private _brushColor: string;
  public get brushColor() {
    return this._brushColor || "#000";
  }
  public set brushColor(value: string) {
    this._brushColor = value;
    if (!this.brush) {
      return;
    }
    this.brush.color = value;
  }

  public get layerManager() {
    return this.manager;
  }

  public get initialized() {
    return this.canvas && this.brush && this.manager;
  }

  constructor(private el: HTMLCanvasElement) {
    this.initialize();
  }

  /**
   * Initialize this drawing app
   */
  private initialize() {
    // Create a Fabric.js canvas
    if (!this.el.parentElement) {
      throw new Error("Canvas element is not attached to the DOM tree");
    }
    this.el.width = Math.min(640, this.el.width);
    this.el.height = this.el.width;
    const canvas = new fabric.Canvas(this.el, {
      isDrawingMode: true,
      enablePointerEvents: true
    } as fabric.ICanvasOptions & { enablePointerEvents?: boolean });

    // Initialize a brush
    this.brush = new PSBrush(canvas);
    this.brush.width = 10;
    this.brush.color = "#000";
    canvas.freeDrawingBrush = this.brush;

    // Set listeners
    canvas.on("object:added", ({ target }) => {
      if (!(target instanceof PSStroke)) {
        return;
      }

      // Handle eraser stroke
      if (this.erasing) {
        const path = target;
        path.globalCompositeOperation = "destination-out";
        path.stroke = "#000";
        path.selectable = false;
        path.evented = false;
      }
    });

    // Set properties
    this.canvas = canvas;
    this.manager = new LayerManager(canvas);
  }

  /**
   * Dispose this drawing app
   */
  public dispose() {
    if (!this.canvas) {
      return;
    }
    this.manager.dispose();
    this.manager = null;
    this.canvas.dispose();
    this.canvas = null;
    this.brush = null;
    console.log("disposed");
  }
}

export { App };
