import { FC, useCallback, useState } from "react";
import { FabricCanvas } from "./FabricCanvas";

const activeClass = "ui labeled icon primary button";
const inactiveClass = "ui labeled icon button";

const DemoAppWrapper: FC = () => {
  const [erasing, setErasing] = useState<boolean>(false);

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
        div.canvas-wrapper > div.canvas {
          text-align: center;
          overflow: hidden;
        }
        div.canvas-wrapper > div.canvas :global(.canvas-container) {
          margin: auto;
          border: 1px solid #eee;
          background: #fff;
        }
      `}</style>
      <div className="ui container">
        <h3 className="ui header">Live demo</h3>
        <p>A simple drawing app.</p>
        <div className="ui divider"></div>
      </div>
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
      </div>
      <div className="canvas">
        <FabricCanvas erasing={erasing} />
      </div>
    </div>
  );
};

export { DemoAppWrapper };
