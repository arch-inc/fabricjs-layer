import { FC, useCallback, useState, MouseEvent } from "react";
import { HorizontalColorPanel, Dimmer, ColorButton } from "react-color-modal";
import Color from "tinycolor2";

const activeClass = "ui labeled icon primary button";
const inactiveClass = "ui labeled icon button";

export interface BrushToggleButtonsProps {
  erasing: boolean;
  color: Color.Instance;
  onErasingSet(erasing: boolean): void;
  onColorUpdate(color: Color.Instance): void;
}

const BrushToggleButtons: FC<BrushToggleButtonsProps> = ({
  erasing,
  color,
  onErasingSet,
  onColorUpdate
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = useCallback(
    (ev: MouseEvent) => {
      const list = (ev.target as HTMLElement).classList;
      if (list.contains("modal") || list.contains("color-button")) {
        setModalOpen(!modalOpen);
      } else {
        console.log("ignore event from", ev.target);
      }
    },
    [modalOpen]
  );

  const handleBrushButtonClick = useCallback(() => onErasingSet(false), []);
  const handleEraserButtonClick = useCallback(() => onErasingSet(true), []);

  return (
    <div className="ui horizontal list">
      <style jsx>{`
        :global(.modal) {
          display: flex;
          align-items: center;
          font-size: 14px;
        }
        :global(.modal > div) {
          max-width: 960px;
          margin: 2em auto;
        }
      `}</style>
      <div className="item">
        <ColorButton onClick={toggleModal} borderColor={color}>
          Brush color
        </ColorButton>
      </div>
      <div className="item">
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
          {modalOpen && (
            <Dimmer
              className="modal"
              onClick={toggleModal}
              style={{ backgroundColor: "rgba(0,0,0,0.3)", overflow: "auto" }}
            >
              <HorizontalColorPanel
                raised={true}
                color={color}
                onColorUpdate={onColorUpdate}
              />
            </Dimmer>
          )}
        </div>
      </div>
    </div>
  );
};

export { BrushToggleButtons };
