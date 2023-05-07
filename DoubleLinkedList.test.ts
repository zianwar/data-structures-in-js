import { DoubleLinkedList } from "./DoubleLinkedList";
import utils from "./utils";

test("append", () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.append(5);

  expect(doubleLinkedList.head.val).toBe(5);
  expect(doubleLinkedList.tail.val).toBe(5);
  expect(utils.linkedListToArray(doubleLinkedList.head)).toEqual([5]);
});

test("append - verify tail and head", () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.append(5);
  doubleLinkedList.append(6);

  expect(doubleLinkedList.head.val).toBe(5);
  expect(doubleLinkedList.tail.val).toBe(6);
  expect(utils.linkedListToArray(doubleLinkedList.head)).toEqual([5, 6]);
});

test("prepend", () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.prepend("foo");
  doubleLinkedList.prepend("bar");

  expect(doubleLinkedList.head.val).toBe("bar");
  expect(doubleLinkedList.tail.val).toBe("foo");
  expect(utils.linkedListToArray(doubleLinkedList.head)).toEqual(["bar", "foo"]);
});

test("delete", () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.append(5);
  doubleLinkedList.delete((node) => node.val === 5);

  expect(utils.linkedListToArray(doubleLinkedList.head)).toEqual([]);
});

test("find", () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.append(5);
  doubleLinkedList.append(6);
  doubleLinkedList.append(7);
  const existingNode = doubleLinkedList.find((node) => node.val === 7);
  const nonExistingNode = doubleLinkedList.find((node) => node.val === 99);

  expect(existingNode.val).toBe(7);
  expect(nonExistingNode).toBeNull();
});

test("replace", () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.append(5);
  doubleLinkedList.append(6);
  doubleLinkedList.append(7);
  doubleLinkedList.replace((n) => n.val === 6, 9);

  expect(utils.linkedListToArray(doubleLinkedList.head)).toEqual([5, 9, 7]);
});
