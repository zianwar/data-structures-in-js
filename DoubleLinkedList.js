class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(val) {
    const node = new ListNode(val);

    // list is empty
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

    // list is non-empty
    if (this.tail) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(val) {
    const node = new ListNode(val);

    // list is empty
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

    // list is non-empty
    if (this.head) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  find(callback) {
    let node = this.head;
    while (node) {
      if (callback(node)) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  replace(callback, val) {
    let node = this.head;
    while (node) {
      if (callback(node)) {
        node.val = val;
        return node;
      }
      node = node.next;
    }
    return null;
  }

  delete(callback) {
    // delete head
    if (callback(this.head)) {
      if (this.head.next) {
        this.head.next = null;
      }
      this.head = this.head.next;
    }

    // delete a non-head node
    let node = this.head;
    while (node) {
      if (callback(node)) {
        node.prev.next = node.next;

        if (this.tail === node) {
          this.tail = node.prev;
        } else {
          node.next.prev = node.prev;
        }
      }

      node = node.next;
    }
  }
}

module.exports = DoubleLinkedList;
