const test = require('ava');
const Hashtable = require('./Hashtable');


test('hash', t => {
  const hashtable = new Hashtable();
  const numberHash = 200 % hashtable.buckets.length;
  const stringHash = ('a'.charCodeAt() + 'b'.charCodeAt()) % hashtable.buckets.length;

  t.is(hashtable.hash(200), numberHash);
  t.is(hashtable.hash('ab'), stringHash);
  // same string should result in same hash code
  t.is(hashtable.hash('ab'), hashtable.hash('ab'));
  // different string should result in different hash codes
  t.not(hashtable.hash('abc'), hashtable.hash('ab'));
});

test('set', t => {
  const hashtable = new Hashtable();
  hashtable.set('foo', 1);
  hashtable.set('bar', 2);

  t.deepEqual(hashtable.buckets[hashtable.hash('foo')].head.data, { key: 'foo', value: 1 });
  t.deepEqual(hashtable.buckets[hashtable.hash('bar')].head.data, { key: 'bar', value: 2 });
});

test('set - value override', t => {
  const hashtable = new Hashtable();
  hashtable.set('foo', 1);
  hashtable.set('foo', 5);

  t.deepEqual(hashtable.buckets[hashtable.hash('foo')].head.data, { key: 'foo', value: 5});
});

test('get', t => {
  const hashtable = new Hashtable();
  hashtable.set('foo', 1);

  t.is(hashtable.get('foo'), 1);
});

test('get - gets most recent value', t => {
  const hashtable = new Hashtable();
  hashtable.set('foo', 1);
  hashtable.set('foo', 5);

  t.is(hashtable.get('foo'), 5);
});

test('delete', t => {
  const hashtable = new Hashtable();
  hashtable.set('foo', 1);

  t.is(hashtable.get('foo'), 1);
  hashtable.delete('foo');
  t.is(hashtable.get('foo'), null);
});
