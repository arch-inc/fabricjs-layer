import { LayerIface } from "./Layer";

export function isLayerGroup(
  object: any
): object is LayerIface {
  return object && object["type"] === "Layer";
}
