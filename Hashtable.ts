import { LinkedList } from "./LinkedList";

type TNode = { value: unknown; key: number | string };

export class Hashtable {
  static DefaultSize = 10;
  protected buckets: LinkedList<TNode>[];

  constructor(size = Hashtable.DefaultSize) {
    this.buckets = new Array(size).fill(null);
  }

  hashString(s: string) {
    const sumCharCodes = (sum: number, char: string) => {
      sum += char.charCodeAt(0);
      return sum;
    };
    const hash = Array.from(s).reduce(sumCharCodes, 0);
    return hash;
  }

  hash(key: string | number): number {
    switch (typeof key) {
      case "string":
        return this.hashString(key) % this.buckets.length;
      case "number":
        return key % this.buckets.length;
      default:
        throw new Error(`invalid key type ${typeof key}`);
    }
  }

  get(key: string | number): unknown {
    let hash = this.hash(key);

    const linkedList = this.buckets[hash];
    if (!linkedList) return null;

    const node = linkedList.find((node) => node.data.key === key);
    if (!node) return null; // node not found

    return node.data.value;
  }

  set(key: string | number, value: unknown): void {
    const hash = this.hash(key);

    if (!this.buckets[hash]) {
      const list = new LinkedList<TNode>();
      list.append({ key, value });
      this.buckets[hash] = list;
      return;
    }

    let linkedList = this.buckets[hash];
    let node = linkedList.find((node) => node.data.key === key);

    if (!node) {
      linkedList.append({ key, value });
      this.buckets[hash] = linkedList;
    } else {
      node.data = { key, value };
    }
  }

  delete(key: string | number): void {
    const hash = this.hash(key);
    const linkedList = this.buckets[hash];
    if (!linkedList) return;
    linkedList.delete((node) => node.data.key === key);
  }
}
