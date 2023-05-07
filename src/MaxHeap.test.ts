import { MaxHeap } from "./MaxHeap";

test("append", () => {
  let heap = new MaxHeap<number>();

  /*
      9
     /
    1
  */
  heap.add(9);
  heap.add(1);
  expect(heap.peek()).toBe(9);
  console.log(heap);

  /*
      10
     /  \
    1    9
  */
  heap.add(10);
  expect(heap.peek()).toBe(10);
  console.log(heap);
});

test("poll", () => {
  let heap = new MaxHeap<number>();
  heap.add(9);
  heap.add(1);
  heap.add(10);

  /*
      9
     /
    1
  */
  expect(heap.poll()).toBe(10);
  expect(heap.peek()).toBe(9);
});
