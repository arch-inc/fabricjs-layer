import { LayerEvent } from "./LayerEvent";

export interface LayerEventListener {
  onObjectAdd?(e: LayerEvent): void;
  onObjectRemove?(e: LayerEvent): void;
}
