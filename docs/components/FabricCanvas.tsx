import { FC, useEffect, useMemo, useRef } from "react";

interface DisposableIface {
  dispose(): void;
}

const FabricCanvas: FC = () => {
  // create a canvas element that never gets reloaded
  const ref = useRef<HTMLCanvasElement>();
  const canvas = useMemo(
    () => <canvas ref={ref} width="720" height="480" />,
    []
  );

  useEffect(() => {
    if (!window || !ref.current) {
      return;
    }
    let canvas: DisposableIface;
    import("../lib/app").then(({ App }) => {
      canvas = new App(ref.current);
    });
    // import("fabric").then(async ({ fabric }) => {
    //   // Create a Fabric.js canvas
    //   const canvas = new fabric.Canvas(ref.current, {
    //     isDrawingMode: true,
    //     enablePointerEvents: true
    //   } as fabric.ICanvasOptions & { enablePointerEvents?: boolean });
    // 
    //   // Initialize a brush
    //   const psbrush = await import("@arch-inc/fabricjs-psbrush");
    //   let brush = new psbrush.PSBrush(canvas);
    //   brush.width = 10;
    //   brush.color = "#000";
    //   canvas.freeDrawingBrush = brush;
    // });
    return () => canvas && canvas.dispose();
  }, [ref.current]);
  return canvas;
}

export { FabricCanvas };
