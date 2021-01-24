import { FC, useEffect, useState } from "react";
import { LayerIface } from "../../dist";
import { LayerEventListener } from "../../dist/LayerEventListener";

export interface LayersListItemProps {
  label: string;
  layer: LayerIface;
}

const LayersListItem: FC<LayersListItemProps> = ({ label, layer }) => {
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
      setSubLabel(`${num} object${num > 1 ? "s" : ""}`);
    }
    updateLabel();
    layer.addListener(listener);
    return () => layer.removeListener(listener);
  }, [layer]);

  return (
    <div className="item">
      {label} ({subLabel || "-"})
    </div>
  );
};

export { LayersListItem };
