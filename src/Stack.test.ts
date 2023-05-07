import { Stack } from "./Stack";
import * as utils from "./utils";

test("push", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);

  expect(stack.size()).toBe(2);
  expect(utils.linkedListToArray(stack.linkedList.head)).toEqual([1, 2]);
});

test("peek", () => {
  const stack = new Stack();
  stack.push(1);

  expect(stack.size()).toBe(1);
  expect(stack.peek()).toBe(1);
});

test("pop", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);

  const popped = stack.pop();
  expect(popped).toBe(2);
  expect(stack.size()).toBe(1);
  expect(utils.linkedListToArray(stack.linkedList.head)).toEqual([1]);
});

test("isEmpty", () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBe(true);
  stack.push(0);
  expect(stack.isEmpty()).toBe(false);
});
