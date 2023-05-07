import { Queue } from "./Queue";
import * as utils from "./utils";

test("add", () => {
  const queue = new Queue<number>();
  queue.add(1);
  queue.add(2);

  expect(queue.size()).toBe(2);
  expect(utils.linkedListToArray(queue.linkedList.head)).toEqual([2, 1]);
});

test("peek", () => {
  const queue = new Queue<number>();
  queue.add(1);

  expect(queue.size()).toBe(1);
  expect(queue.peek()).toBe(1);
});

test("remove", () => {
  const queue = new Queue<number>();
  queue.add(1);
  queue.add(2);

  const removed = queue.remove();
  expect(removed).toBe(1);
  expect(queue.size()).toBe(1);
  expect(utils.linkedListToArray(queue.linkedList.head)).toEqual([2]);
});

test("isEmpty", () => {
  const queue = new Queue<number>();
  expect(queue.isEmpty()).toBe(true);
  queue.add(0);
  expect(queue.isEmpty()).toBe(false);
});
