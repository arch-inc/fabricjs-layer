import { LayerManagerEvent } from "./LayerManagerEvent";

export interface LayerManagerEventListener {
  onLayerActivated?(e: LayerManagerEvent): void;
  onLayerDeactivated?(e: LayerManagerEvent): void;
  onLayerAdd?(e: LayerManagerEvent): void;
  onLayerRemove?(e: LayerManagerEvent): void;
  onLayerMove?(e: LayerManagerEvent): void;
}
