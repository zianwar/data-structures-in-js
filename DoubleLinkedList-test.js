const test = require('ava');
const DoubleLinkedList = require('./DoubleLinkedList')
const utils = require('./utils');


test('append', t => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.append(5);

  t.is(doubleLinkedList.head.val, 5);
  t.is(doubleLinkedList.tail.val, 5);
  t.deepEqual(utils.linkedListToArray(doubleLinkedList.head), [5]);
});

test('append - verify tail and head', t => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.append(5);
  doubleLinkedList.append(6);

  t.is(doubleLinkedList.head.val, 5);
  t.is(doubleLinkedList.tail.val, 6);
  t.deepEqual(utils.linkedListToArray(doubleLinkedList.head), [5, 6]);
});

test('prepend', t => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.prepend('foo');
  doubleLinkedList.prepend('bar');

  t.is(doubleLinkedList.head.val, 'bar');
  t.is(doubleLinkedList.tail.val, 'foo');
  t.deepEqual(utils.linkedListToArray(doubleLinkedList.head), ['bar', 'foo']);
});

test('delete', t => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.append(5);
  doubleLinkedList.delete(node => node.val === 5);

  t.deepEqual(utils.linkedListToArray(doubleLinkedList.head), []);
});

test('find', t => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.append(5);
  doubleLinkedList.append(6);
  doubleLinkedList.append(7);
  const existingNode = doubleLinkedList.find(node => node.val === 7);
  const nonExistingNode = doubleLinkedList.find(node => node.val === 99);

  t.is(existingNode.val, 7);
  t.is(nonExistingNode, null);
});

test('replace', t => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.append(5);
  doubleLinkedList.append(6);
  doubleLinkedList.append(7);
  doubleLinkedList.replace(n => n.val === 6, 9);

  t.deepEqual(utils.linkedListToArray(doubleLinkedList.head), [5, 9, 7]);
});