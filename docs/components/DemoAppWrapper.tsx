import { FC, useCallback, useMemo, useState } from "react";
import Color from "tinycolor2";

import { FabricCanvas } from "./FabricCanvas";
import { App } from "../lib/app";
import { LayersList } from "./LayersList";
import { BrushToggleButtons } from "./BrushToggleButtons";

const DemoAppWrapper: FC = () => {
  const [erasing, setErasing] = useState<boolean>(false);
  const [color, setColor] = useState<Color.Instance>(new Color("#000"));
  const [app, setApp] = useState<App>(null);

  const handleLayerAddButtonClick = useCallback(() => {
    if (!app) {
      return;
    }
    app.layerManager.addLayer();
  }, [app]);

  const colorString = useMemo(() => color.toHexString(), [color]);

  return (
    <div className="canvas-wrapper">
      <style jsx>{`
        div.canvas-wrapper {
          background: #f5f5f5;
          margin: 2em auto 0 auto;
          padding: 2em 0;
        }
        div.canvas {
          margin-top: 1em;
          text-align: center;
          overflow: hidden;
        }
        div.canvas :global(.canvas-container) {
          margin: auto;
          border: 1px solid #eee;
          background: #fff;
        }
        div.sidebar {
          padding: 1em;
        }
      `}</style>
      <div className="ui container">
        <h3 className="ui header">Live demo</h3>
        <p>A simple drawing app.</p>
        <div className="ui divider"></div>
      </div>
      <div className="ui stackable grid">
        <div className="twelve wide column">
          <div className="ui center aligned basic segment">
            <BrushToggleButtons
              erasing={erasing}
              color={color}
              onErasingSet={setErasing}
              onColorUpdate={setColor}
            />
            <div className="canvas">
              <FabricCanvas
                erasing={erasing}
                brushColor={colorString}
                onAppInit={setApp}
              />
            </div>
          </div>
        </div>
        <div className="four wide column">
          <div className="sidebar">
            <h4 className="ui dividing header">
              <i className="list icon" />
              <div className="content">Layers</div>
            </h4>
            <button
              className="ui labeled icon fluid mini button"
              onClick={handleLayerAddButtonClick}
            >
              <i className="plus icon" />
              Add layer
            </button>
            <LayersList app={app} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { DemoAppWrapper };
