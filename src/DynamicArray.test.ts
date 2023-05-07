import { DynamicArray } from "./DynamicArray";

test("append", () => {
  const cap = 3;
  const dynamicArray = new DynamicArray<number>(cap);
  dynamicArray.append(5);

  expect(dynamicArray.length).toBe(1);
  expect(dynamicArray.capacity).toBe(cap);
  console.log(dynamicArray);
  expect(dynamicArray.arr).toEqual([5, null, null]);
});

test("append until doubling", () => {
  const cap = 3;
  const dynamicArray = new DynamicArray<number>(cap);
  dynamicArray.append(4);
  dynamicArray.append(6);
  dynamicArray.append(7);
  dynamicArray.append(8);

  expect(dynamicArray.length).toBe(4);
  expect(dynamicArray.capacity).toBe(cap * 2);
  expect(dynamicArray.arr.slice(0, dynamicArray.length)).toEqual([4, 6, 7, 8]);
});

test("delete", () => {
  const cap = 5;
  const dynamicArray = new DynamicArray<number>(cap);
  dynamicArray.append(3);
  dynamicArray.append(4);
  dynamicArray.delete(4);

  expect(dynamicArray.length).toBe(1);
  expect(dynamicArray.arr.slice(0, dynamicArray.length)).toEqual([3]);
});

test("delete until shrink", () => {
  const cap = 3;
  const dynamicArray = new DynamicArray<number>(cap);
  dynamicArray.append(3);
  dynamicArray.append(4);
  dynamicArray.append(5);
  dynamicArray.append(6);

  expect(dynamicArray.length).toBe(4);
  expect(dynamicArray.capacity).toBe(cap * 2);

  dynamicArray.delete(6);
  dynamicArray.delete(5);
  dynamicArray.delete(4);

  expect(dynamicArray.length).toBe(1);
  expect(dynamicArray.capacity).toBe(cap);
});
