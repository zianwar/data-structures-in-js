const LinkedList = require('./LinkedList');

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
class Queue {
  constructor() {
    this.linkedList = new LinkedList();
    this.length = 0;
  }

  /**
   * add Adds an item at the back of the queue
   *
   * @param {any} item
   */
  add(item) {
    this.linkedList.prepend(item);
    this.length++;
  }

  /**
   * peek return the item at the front of the queue
   *
   * @returns {any} item
   */
  peek() {
    return this.linkedList.tail ? this.linkedList.tail.data : null;
  }

  /**
   * remove Removes the item at the front of the queue and returns it.
   *
   * @returns {any} item The item at the front of the queue
   */
  remove() {
    let tail = this.linkedList.tail;
    if (!tail) return null;
    // TODO: `node.data === tail.data` may not work properly for non-primitive types.
    // consider doing deep equality in those cases...
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

module.exports = Queue;
