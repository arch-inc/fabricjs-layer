import { LayerIface } from ".";

interface LayerManagerActiveLayerEvent {
  type: "layer:activate" | "layer:deactivate";
  layer: LayerIface;
}

interface LayerManagerLayerEvent {
  type: "layer:add" | "layer:remove";
  layer: LayerIface;
}

interface LayerManagerLayerMoveEvent {
  type: "layer:move";
  layer: LayerIface;
  options: {
    from: number;
    to: number;
  };
}

export type LayerManagerEvent =
  | LayerManagerActiveLayerEvent
  | LayerManagerLayerEvent
  | LayerManagerLayerMoveEvent;
