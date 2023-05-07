import { LinkedList } from "./LinkedList";
import * as utils from "./utils";

test("append", () => {
  const linkedList = new LinkedList();
  linkedList.append(5);

  expect(linkedList.head.data).toBe(5);
  expect(linkedList.tail.data).toBe(5);
  expect(utils.linkedListToArray(linkedList.head)).toEqual([5]);
});

test("append - verify tail and head", () => {
  const linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(6);

  expect(linkedList.head.data).toBe(5);
  expect(linkedList.tail.data).toBe(6);
  expect(utils.linkedListToArray(linkedList.head)).toEqual([5, 6]);
});

test("prepend", () => {
  const linkedList = new LinkedList();
  linkedList.prepend("foo");
  linkedList.prepend("bar");

  expect(linkedList.head.data).toBe("bar");
  expect(linkedList.tail.data).toBe("foo");
  expect(utils.linkedListToArray(linkedList.head)).toEqual(["bar", "foo"]);
});

test("delete", () => {
  const linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.delete((node) => node.data === 5);

  expect(utils.linkedListToArray(linkedList.head)).toEqual([]);
});

test("find", () => {
  const linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(6);
  linkedList.append(7);
  const existingNode = linkedList.find((node) => node.data === 7);
  const nonExistingNode = linkedList.find((node) => node.data === 99);

  expect(existingNode.data).toBe(7);
  expect(nonExistingNode).toBeNull();
});
