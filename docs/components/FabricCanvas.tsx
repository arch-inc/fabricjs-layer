import { FC, useEffect, useMemo, useRef, useState } from "react";
import { App } from "../lib/app";

export interface FabricCanvasProps {
  erasing?: boolean;
}

interface DisposableIface {
  dispose(): void;
}

const FabricCanvas: FC<FabricCanvasProps> = ({ erasing }) => {
  // create a canvas element that never gets reloaded
  const ref = useRef<HTMLCanvasElement>();
  const canvas = useMemo(
    () => <canvas ref={ref} width="720" height="480" />,
    []
  );
  const [app, setApp] = useState<App>(null);

  useEffect(() => {
    if (!window || !ref.current) {
      return;
    }
    let canvas: DisposableIface;
    import("../lib/app").then(({ App }) => {
      canvas = new App(ref.current);
      setApp(canvas as App);
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

  useEffect(() => {
    if (!app) {
      return;
    }
    app.erasing = erasing;
  }, [app, erasing]);

  return canvas;
};

export { FabricCanvas };