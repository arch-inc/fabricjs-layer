import { LayerIface } from "./Layer";

export interface LayerManagerActiveLayerEvent {
  type: "layer:activate" | "layer:deactivate";
  layer: LayerIface;
}

export interface LayerManagerLayerEvent {
  type: "layer:add" | "layer:remove";
  layer: LayerIface;
}

export interface LayerManagerLayerMoveEvent {
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
