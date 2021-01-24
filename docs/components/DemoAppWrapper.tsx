import { FC, useCallback, useState } from "react";
import { FabricCanvas } from "./FabricCanvas";
import { App } from "../lib/app";
import { LayersList } from "./LayersList";

const activeClass = "ui labeled icon primary button";
const inactiveClass = "ui labeled icon button";

const DemoAppWrapper: FC = () => {
  const [erasing, setErasing] = useState<boolean>(false);
  const [app, setApp] = useState<App>(null);

  const handleBrushButtonClick = useCallback(() => setErasing(false), []);
  const handleEraserButtonClick = useCallback(() => setErasing(true), []);

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
            <div className="ui buttons">
              <button
                className={erasing ? inactiveClass : activeClass}
                onClick={handleBrushButtonClick}
              >
                <i className="paint brush icon" />
                Brush
              </button>
              <button
                className={erasing ? activeClass : inactiveClass}
                onClick={handleEraserButtonClick}
              >
                <i className="eraser icon" />
                Eraser
              </button>
            </div>
            <div className="canvas">
              <FabricCanvas erasing={erasing} onAppInit={setApp} />
            </div>
          </div>
        </div>
        <div className="four wide column">
          <div className="sidebar">
            <h4 className="ui dividing header">
              <i className="list icon" />
              <div className="content">Layers</div>
            </h4>
            <LayersList app={app} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { DemoAppWrapper };
