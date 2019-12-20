const test = require('ava');
const Queue = require('./Queue');
const utils = require('./utils');

test('add', t => {
  const queue = new Queue();
  queue.add(1);
  queue.add(2);

  t.is(queue.size(), 2);
  t.deepEqual(utils.linkedListToArray(queue.linkedList.head), [2, 1]);
});

test('peek', t => {
  const queue = new Queue();
  queue.add(1);

  t.is(queue.size(), 1);
  t.is(queue.peek(), 1);
});

test('remove', t => {
  const queue = new Queue();
  queue.add(1);
  queue.add(2);

  const removed = queue.remove();
  t.is(removed, 1);
  t.deepEqual(queue.size(), 1);
  t.deepEqual(utils.linkedListToArray(queue.linkedList.head), [2]);
});

test('isEmpty', t => {
  const queue = new Queue();
  t.is(queue.isEmpty(), true);
  queue.add(0);
  t.is(queue.isEmpty(), false);
});
