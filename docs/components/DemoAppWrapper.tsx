import { FC, useCallback, useMemo, useState } from "react";
import Color from "tinycolor2";
import { App } from "../lib/app";

import { FabricCanvas } from "./FabricCanvas";
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

  const handleLayerMoveUpButtonClick = useCallback(() => {
    if (!app) {
      return;
    }
    if (
      app.layerManager.activeLayerIndex >=
      app.layerManager.layersLength - 1
    ) {
      console.log("specified layer is the most foreground");
      return;
    }
    app.layerManager.moveLayer(
      app.layerManager.activeLayerIndex,
      app.layerManager.activeLayerIndex + 1
    );
  }, [app]);

  const handleLayerMoveDownButtonClick = useCallback(() => {
    if (!app) {
      return;
    }
    if (app.layerManager.activeLayerIndex <= 0) {
      console.log("specified layer is the most background");
      return;
    }
    app.layerManager.moveLayer(
      app.layerManager.activeLayerIndex,
      app.layerManager.activeLayerIndex - 1
    );
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
        div.add.button {
          margin-bottom: 1em;
        }
      `}</style>
      <div className="ui container">
        <h3 className="ui header">Live demo</h3>
        <p>
          A simple drawing app with layer support. (Eraser would NOT work as
          intended due to the Fabric.js specification. It is utilizing{" "}
          <code>globalCompositeOperation</code>.)
        </p>
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
            <div className="ui list">
              <div className="item">
                <button
                  className="ui labeled icon fluid mini add button"
                  onClick={handleLayerAddButtonClick}
                >
                  <i className="plus icon" />
                  Add layer
                </button>
              </div>
              <div className="item">
                <div className="ui fluid buttons">
                  <button
                    className="ui icon mini button"
                    onClick={handleLayerMoveUpButtonClick}
                  >
                    <i className="arrow up icon" />
                  </button>
                  <button
                    className="ui icon mini button"
                    onClick={handleLayerMoveDownButtonClick}
                  >
                    <i className="arrow down icon" />
                  </button>
                </div>
              </div>
            </div>
            <LayersList app={app} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { DemoAppWrapper };
