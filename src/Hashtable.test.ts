import { Hashtable } from "./Hashtable";

test("hash", () => {
  const size = 10;
  const hashtable = new Hashtable(size);
  const numberHash = 200 % size;
  const stringHash = ("a".charCodeAt(0) + "b".charCodeAt(0)) % size;

  expect(hashtable.hash(200)).toBe(numberHash);
  expect(hashtable.hash("ab")).toBe(stringHash);
  // same string should result in same hash code
  expect(hashtable.hash("ab")).toBe(hashtable.hash("ab"));
  // different string should result in different hash codes
  expect(hashtable.hash("abc")).not.toBe(hashtable.hash("ab"));
});

test("set", () => {
  const hashtable = new Hashtable();
  hashtable.set("foo", 1);
  hashtable.set("bar", 2);

  expect(hashtable.get("foo")).toBe(1);
  expect(hashtable.get("bar")).toBe(2);
});

test("set - value override", () => {
  const hashtable = new Hashtable();
  hashtable.set("foo", 1);
  hashtable.set("foo", 5);

  expect(hashtable.get("foo")).toBe(5);
});

test("get", () => {
  const hashtable = new Hashtable();
  hashtable.set("foo", 1);

  expect(hashtable.get("foo")).toBe(1);
});

test("get - gets most recent value", () => {
  const hashtable = new Hashtable();
  hashtable.set("foo", 1);
  hashtable.set("foo", 5);

  expect(hashtable.get("foo")).toBe(5);
});

test("delete", () => {
  const hashtable = new Hashtable();
  hashtable.set("foo", 1);

  expect(hashtable.get("foo")).toBe(1);
  hashtable.delete("foo");
  expect(hashtable.get("foo")).toBeNull();
});
