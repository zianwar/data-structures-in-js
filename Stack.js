const LinkedList = require('./LinkedList');

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
class Stack {
  constructor() {
    this.linkedList = new LinkedList();
    this.length = 0;
  }

  /**
   * pop Appends an item at the top of the stack.
   */
  push(item) {
    this.linkedList.append(item);
    this.length++;
  }

  /**
   * pop Returns the item at the top of the stack.
   */
  peek() {
    return this.linkedList.tail ? this.linkedList.tail.data : null;
  }

  /**
   * pop Removes the item at the top of the stack and returns it.
   */
  pop() {
    const tail = this.linkedList.tail;
    if (!tail) return null;

    this.linkedList.delete(node => node.data === tail.data);
    this.length--;
    return tail.data;
  }

  isEmpty() {
    return this.length == 0;
  }

  size() {
    return this.length;
  }
}

module.exports = Stack;