import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { LayerIface, LayerManagerEventListener } from "../../";
import { App } from "../lib/app";

import { LayersListItem } from "./LayersListItem";

export interface LayersListProps {
  app: App;
}

const LayersList: FC<LayersListProps> = ({ app }) => {
  const [activeLayer, setActiveLayer] = useState<LayerIface>(null);
  const [layers, setLayers] = useState<LayerIface[]>(null);

  useEffect(() => {
    if (!app) {
      return;
    }

    const listener: LayerManagerEventListener = {
      onLayerAdd(e) {
        console.log("layer:add", e);
        app.layerManager.activeLayer = e.layer;
        setLayers(app.layerManager.layers);
      },
      onLayerRemove(e) {
        console.log("layer:remove", e);
        setLayers(app.layerManager.layers);
      },
      onLayerMove(e) {
        console.log("layer:move", e);
        setLayers(app.layerManager.layers);
      },
      onLayerActivated(e) {
        console.log("layer:activated", e);
        setActiveLayer(e.layer);
      }
    };

    app.layerManager.addListener(listener);
    setLayers(app.layerManager.layers);
    setActiveLayer(app.layerManager.activeLayer);
    return () => {
      app?.layerManager && app.layerManager.removeListener(listener);
    };
  }, [app]);

  const handleLayerSelect = useCallback(
    (layer: LayerIface) => {
      if (!app) {
        return;
      }

      app.layerManager.activeLayer = layer;
    },
    [app]
  );

  const reversedLayers = useMemo(() => (layers ? layers.reverse() : null), [
    layers
  ]);

  return (
    <div className="ui middle aligned selection list">
      {reversedLayers ? (
        reversedLayers.map((layer, i) => (
          <LayersListItem
            key={i}
            label={`Layer ${layer.createdTime}`}
            layer={layer}
            active={layer === activeLayer}
            onLayerSelect={handleLayerSelect}
          />
        ))
      ) : (
        <div className="item">No layer available</div>
      )}
    </div>
  );
};

export { LayersList };
