import { LayerIface } from ".";

interface LayerManagerLayerEvent {
  type: "layer:add" | "layer:remove";
  layer: LayerIface;
  event: fabric.IEvent;
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
  | LayerManagerLayerEvent
  | LayerManagerLayerMoveEvent;
