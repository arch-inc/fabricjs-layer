
function initialize(el) {
  // Create a Fabric.js canvas
  const canvas = new fabric.Canvas(el, {
    isDrawingMode: true,
    enablePointerEvents: true
  });

  // Initialize a brush
  const brush = new fabric.PSBrush(canvas);
  brush.width = 10;
  brush.color = "#000";

  let eraser = new fabric.EraserBrush(canvas, { Simplify: psbrush.Simplify });
  eraser.width = 10;
  eraser.color = "rgba(255,0,0,0.3)";

  canvas.freeDrawingBrush = brush;

  const brushButton = document.querySelector("#brush");
  brushButton.addEventListener("click", () => {
    canvas.freeDrawingBrush = brush;
    brushButton.classList.add("primary");
    eraserButton.classList.remove("primary");
  });
  const eraserButton = document.querySelector("#eraser");
  eraserButton.addEventListener("click", () => {
    canvas.freeDrawingBrush = eraser;
    brushButton.classList.remove("primary");
    eraserButton.classList.add("primary");
  });
  const undoButton = document.querySelector("#undo");
  undoButton.addEventListener("click", () => {
    lastGroup.ungroup();
    undoButton.disabled = true;
  });

  let lastGroup;
  canvas.on("erased-group:added", ({ target }) => {
    // console.log("added", target);
    // canvas.loadFromJSON(canvas.toObject()); // for debug purpose
    lastGroup = target;
    undoButton.disabled = false;
  });
}
