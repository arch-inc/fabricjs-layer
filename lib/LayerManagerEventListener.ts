import { LayerManagerEvent } from "./LayerManagerEvent";

export interface LayerManagerEventListener {
  onLayerAdd?(e: LayerManagerEvent): void;
  onLayerRemove?(e: LayerManagerEvent): void;
  onLayerMove?(e: LayerManagerEvent): void;
}
