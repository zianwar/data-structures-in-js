import { LinkedList } from "./LinkedList";

/**
 * Stack data structure
 *
 * Implementation strategy:
 *
 *  head of the List       tail of the List
 *   ▼                      ▼
 * (node 1) -> (node 2) -> (node 3)  ◀ push, ▶ pop
 *                             ▲
 *                             top of the stack
 *
 */
export class Stack<T> {
  linkedList = new LinkedList<T>();
  length = 0;

  /**
   * pop
   *
   * Appends an item at the top of the stack.
   */
  push(item: T): void {
    this.linkedList.append(item);
    this.length++;
  }

  /**
   * pop
   *
   * Returns the item at the top of the stack.
   */
  peek(): T | null {
    return this.linkedList.tail ? this.linkedList.tail.data : null;
  }

  /**
   * pop
   *
   * Removes the item at the top of the stack and returns it.
   */
  pop(): T | null {
    const tail = this.linkedList.tail;
    if (!tail) return null;

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
