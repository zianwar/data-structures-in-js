const test = require('ava');
const DynamicArray = require('./DynamicArray');


test('append', t => {
  const cap = 3;
  const dynamicArray = new DynamicArray(cap);
  dynamicArray.append(5);

  t.is(dynamicArray.length, 1)
  t.is(dynamicArray.capacity, cap)
  t.is(dynamicArray.arr[0], 5)
});

test('append until doubling', t => {
  const cap = 3;
  const dynamicArray = new DynamicArray(cap);
  dynamicArray.append(4);
  dynamicArray.append(6);
  dynamicArray.append(7);
  dynamicArray.append(8);

  t.is(dynamicArray.length, 4)
  t.is(dynamicArray.capacity, cap * 2)
  t.deepEqual(dynamicArray.arr.slice(0, dynamicArray.length), [4, 6, 7, 8]);
});

test('delete', t => {
  const cap = 5;
  const dynamicArray = new DynamicArray(cap);
  dynamicArray.append(3);
  dynamicArray.append(4);
  dynamicArray.delete(4);

  t.is(dynamicArray.length, 1)
  t.deepEqual(dynamicArray.arr.slice(0, dynamicArray.length), [3]);
});

test('delete until shrink', t => {
  const cap = 3;
  const dynamicArray = new DynamicArray(cap);
  dynamicArray.append(3);
  dynamicArray.append(4);
  dynamicArray.append(5);
  dynamicArray.append(6);

  t.is(dynamicArray.length, 4)
  t.is(dynamicArray.capacity, cap * 2);

  dynamicArray.delete(6);
  dynamicArray.delete(5);
  dynamicArray.delete(4);

  t.is(dynamicArray.length, 1);
  t.is(dynamicArray.capacity, cap);
});
