import { MinHeap } from "./MinHeap";

test("append", () => {
  let heap = new MinHeap<number>();

  /*
      9
     /
    1
  */
  heap.add(9);
  heap.add(1);
  expect(heap.peek()).toBe(1);
});
