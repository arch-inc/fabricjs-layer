import { FC, useCallback, useState } from "react";

const activeClass = "ui labeled icon primary button";
const inactiveClass = "ui labeled icon button";

export interface BrushToggleButtonsProps {
  erasing: boolean;
  onErasingSet(erasing: boolean): void;
}

const BrushToggleButtons: FC<BrushToggleButtonsProps> = ({
  erasing,
  onErasingSet
}) => {
  const handleBrushButtonClick = useCallback(() => onErasingSet(false), []);
  const handleEraserButtonClick = useCallback(() => onErasingSet(true), []);

  return (
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
  );
};

export { BrushToggleButtons };
