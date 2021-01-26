import { FC, useEffect, useMemo, useRef, useState } from "react";
import { App } from "../lib/app";

export interface FabricCanvasProps {
  erasing?: boolean;
  brushColor?: string;
  onAppInit?(app: App): void;
}

interface DisposableIface {
  dispose(): void;
}

const FabricCanvas: FC<FabricCanvasProps> = ({
  erasing,
  brushColor,
  onAppInit
}) => {
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

    let myApp: DisposableIface;
    import("../lib/app").then(({ App }) => {
      myApp = new App(ref.current);
      setApp(myApp as App);
    });

    return () => myApp && myApp.dispose();
  }, [ref.current]);

  useEffect(() => {
    if (!app || !app.initialized || !onAppInit) {
      return;
    }
    onAppInit(app);
  }, [app, onAppInit]);

  useEffect(() => {
    if (!app) {
      return;
    }
    app.erasing = erasing;
  }, [app, erasing]);

  useEffect(() => {
    if (!app) {
      return;
    }
    app.brushColor = brushColor;
  }, [app, brushColor]);

  return canvas;
};

export { FabricCanvas };
