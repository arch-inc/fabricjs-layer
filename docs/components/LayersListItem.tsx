import { FC, useCallback, useEffect, useState } from "react";
import { LayerIface } from "../../dist";
import { LayerEventListener } from "../../dist/LayerEventListener";

export interface LayersListItemProps {
  label: string;
  layer: LayerIface;
  active?: boolean;
  onLayerSelect?(layer: LayerIface): void;
}

const LayersListItem: FC<LayersListItemProps> = ({
  label,
  layer,
  active,
  onLayerSelect
}) => {
  const [subLabel, setSubLabel] = useState<string>(null);

  useEffect(() => {
    if (!layer) {
      return;
    }

    const listener: LayerEventListener = {
      onObjectAdd(e) {
        updateLabel();
        console.log("object:add", e);
      },
      onObjectRemove(e) {
        updateLabel();
        console.log("object:remove", e);
      }
    };

    function updateLabel() {
      const num = layer.endIndex - layer.startIndex;
      setSubLabel(
        `${layer.startIndex}~${layer.endIndex}; ${num} obj${num > 1 ? "s" : ""}`
      );
    }
    updateLabel();
    layer.addListener(listener);
    return () => layer.removeListener(listener);
  }, [layer]);

  const handleLayerSelect = useCallback(
    () => onLayerSelect && onLayerSelect(layer),
    [layer, onLayerSelect]
  );

  return (
    <div className="item" onClick={handleLayerSelect}>
      {active && <i className="check icon" />}
      <div className="content">
        {label} ({subLabel || "-"})
      </div>
    </div>
  );
};

export { LayersListItem };
