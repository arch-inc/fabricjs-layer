import { fabric } from "fabric";
import { LayerGroupIface } from "./LayerGroup";

export function isLayerGroup(
  object: fabric.Object | fabric.ICollection<any>
): object is LayerGroupIface {
  return object && object["type"] === "LayerGroup";
}
