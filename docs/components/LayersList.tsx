import { FC, useEffect, useState } from "react";
import { LayerIface } from "../../dist";
import { LayerManagerEventListener } from "../../dist/LayerManagerEventListener";
import { App } from "../lib/app";

import { LayersListItem } from "./LayersListItem";

export interface LayersListProps {
  app: App;
}

const LayersList: FC<LayersListProps> = ({ app }) => {
  const [layers, setLayers] = useState<LayerIface[]>(null);

  useEffect(() => {
    if (!app) {
      return;
    }

    const listener: LayerManagerEventListener = {
      onLayerAdd(e) {
        console.log("layer:add", e);
      },
      onLayerRemove(e) {
        console.log("layer:remove", e);
      },
      onLayerMove(e) {
        console.log("layer:move", e);
      }
    };

    app.layerManager.addListener(listener);
    setLayers(app.layerManager.layers);
    return () => app?.layerManager && app.layerManager.removeListener(listener);
  }, [app]);

  return (
    <div className="ui middle aligned selection list">
      {layers ? (
        layers.map((layer, i) => (
          <LayersListItem key={i} label={`Layer ${i + 1}`} layer={layer} />
        ))
      ) : (
        <div className="item">No layer available</div>
      )}
    </div>
  );
};

export { LayersList };
