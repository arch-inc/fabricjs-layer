import { LayerIface } from "./Layer";

export function isLayerGroup(object: any): object is LayerIface {
  return object && object["type"] === "Layer";
}

export function getIndexOf<T>(target: T, array: T[]) {
  const lastIndex = array.length - 1;
  return array[lastIndex] === target ? lastIndex : array.indexOf(target);
}
