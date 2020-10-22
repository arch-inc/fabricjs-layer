import { fabric } from "fabric";
import { ErasedGroupIface } from "./ErasedGroup";

export function isErasedGroup(
  object: fabric.Object | fabric.ICollection<any>
): object is ErasedGroupIface {
  return object["type"] === "ErasedGroup";
}

export function getOverlappedObjects(
  scope: fabric.Group | fabric.Canvas,
  path: fabric.Path
) {
  // get list of objects in the parent scope
  const allObjects = scope.getObjects();

  // grab all the objects that intersects with the path
  // and get group-relative position of top-left corner of the filtered objects
  let left = Number.MAX_VALUE,
    top = Number.MAX_VALUE,
    minIntersectionIndex = -1,
    maxIntersectionIndex = -1;

  allObjects.forEach((obj, i) => {
    // if (obj instanceof fabric.Textbox) return false;
    // if (obj instanceof fabric.IText) return false;
    left = Math.min(left, obj.aCoords.tl.x);
    top = Math.min(top, obj.aCoords.tl.y);
    const intersection = obj.intersectsWithObject(path);
    if (intersection) {
      if (minIntersectionIndex < 0) {
        minIntersectionIndex = i;
      }
      maxIntersectionIndex = i;
    }
    return intersection;
  });

  const objects =
    minIntersectionIndex < 0
      ? []
      : allObjects.slice(minIntersectionIndex, maxIntersectionIndex + 1);
  return {
    overlapped: {
      objects,
      topLeft: getTopLeft(objects),
      index: minIntersectionIndex,
    },
    all: { objects: allObjects, topLeft: { left, top } },
  };
}

export function getTopLeft(objects: fabric.Object[]) {
  let left = Number.MAX_VALUE,
    top = Number.MAX_VALUE;
  objects.forEach((obj) => {
    left = Math.min(left, obj.aCoords.tl.x);
    top = Math.min(top, obj.aCoords.tl.y);
  });
  return { left, top };
}
