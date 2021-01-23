export interface LayerEvent {
  type: "object:add" | "object:remove";
  event: fabric.IEvent;
}
