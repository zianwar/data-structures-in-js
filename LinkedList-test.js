const test = require('ava');
const LinkedList = require('./LinkedList')
const utils = require('./utils');


test('append', t => {
  const linkedList = new LinkedList();
  linkedList.append(5);

  t.is(linkedList.head.data, 5);
  t.is(linkedList.tail.data, 5);
  t.deepEqual(utils.linkedListToArray(linkedList.head), [5]);
});

test('append - verify tail and head', t => {
  const linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(6);

  t.is(linkedList.head.data, 5);
  t.is(linkedList.tail.data, 6);
  t.deepEqual(utils.linkedListToArray(linkedList.head), [5, 6]);
});

test('prepend', t => {
  const linkedList = new LinkedList();
  linkedList.prepend('foo');
  linkedList.prepend('bar');

  t.is(linkedList.head.data, 'bar');
  t.is(linkedList.tail.data, 'foo');
  t.deepEqual(utils.linkedListToArray(linkedList.head), ['bar', 'foo']);
});

test('delete', t => {
  const linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.delete(node => node.data === 5);

  t.deepEqual(utils.linkedListToArray(linkedList.head), []);
});

test('find', t => {
  const linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(6);
  linkedList.append(7);
  const existingNode = linkedList.find(node => node.data === 7);
  const nonExistingNode = linkedList.find(node => node.data === 99);

  t.is(existingNode.data, 7);
  t.is(nonExistingNode, null);
});