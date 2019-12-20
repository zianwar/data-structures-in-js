const test = require('ava');
const Stack = require('./Stack');
const utils = require('./utils');

test('push', t => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);

  t.is(stack.size(), 2);
  t.deepEqual(utils.linkedListToArray(stack.linkedList.head), [1, 2]);
});

test('peek', t => {
  const stack = new Stack();
  stack.push(1);

  t.is(stack.size(), 1);
  t.is(stack.peek(), 1);
});

test('pop', t => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);

  const popped = stack.pop();
  t.is(popped, 2);
  t.deepEqual(stack.size(), 1);
  t.deepEqual(utils.linkedListToArray(stack.linkedList.head), [1]);
});

test('isEmpty', t => {
  const stack = new Stack();
  t.is(stack.isEmpty(), true);
  stack.push(0);
  t.is(stack.isEmpty(), false);
});
