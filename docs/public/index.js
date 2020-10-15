
function initialize(el) {
  // Create a Fabric.js canvas
  let canvas = new fabric.Canvas(el, {
    isDrawingMode: true,
    enablePointerEvents: true
  });

  console.log("psbrush", psbrush);
  console.log("eraser", eraser);
  
  // Initialize a brush
  // let brush = new fabric.PSBrush(canvas);
  // brush.width = 10;
  // brush.color = "#000";
  // canvas.freeDrawingBrush = brush;
  let brush = new fabric.EraserBrush(canvas, { Simplify: psbrush.Simplify });
  brush.width = 10;
  canvas.freeDrawingBrush = brush;

}
