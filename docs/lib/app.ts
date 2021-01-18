import { fabric } from "fabric";
import { PSBrush } from "@arch-inc/fabricjs-psbrush";

/**
 * Deadly simple drawing app
 */
class App {
  private canvas: fabric.Canvas;

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
    const brush = new PSBrush(canvas);
    brush.width = 10;
    brush.color = "#000";
    canvas.freeDrawingBrush = brush;

    // Set property
    this.canvas = canvas;
    console.log("initialized");
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
    console.log("disposed");
  }
}

export { App };
