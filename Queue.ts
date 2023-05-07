import { LinkedList } from "./LinkedList";

/**
 * Queue data structure
 *
 * Implementation strategy:
 *
 *           head of the List       tail of the List
 *            ▼                      ▼
 * add ▶  (node 1) -> (node 2) -> (node 3)   ▶ remove
 *           ▲                       ▲
 *          back of the queue       front of the queue
 *
 */
export class Queue<T> {
  linkedList: LinkedList<T>;
  length = 0;

  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * add
   *
   * Adds an item at the back of the queue
   */
  add(item: T): void {
    this.linkedList.prepend(item);
    this.length++;
  }

  /**
   * peek
   *
   * Returns the item at the front of the queue
   */
  peek(): T | null {
    return this.linkedList.tail ? this.linkedList.tail.data : null;
  }

  /**
   * remove
   *
   * Removes the item at the front of the queue and returns it.
   */
  remove(): T {
    let tail = this.linkedList.tail;
    if (!tail) return null;
    // TODO: `node.data === tail.data` may not work properly for non-primitive types.
    // consider doing deep equality in those cases...
    this.linkedList.delete((node) => node.data === tail.data);
    this.length--;
    return tail.data;
  }

  isEmpty(): boolean {
    return this.length == 0;
  }

  size(): number {
    return this.length;
  }
}
