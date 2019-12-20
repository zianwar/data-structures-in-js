class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const node = new ListNode(data);

    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(data) {
    const node = new ListNode(data);

    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

    if (this.head) {
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

  delete(callback) {
    if (callback(this.head)) {
      this.head = this.head.next;
    }

    let node = this.head;
    while (node && node.next) {
      if (callback(node.next)) {
        if (!node.next.next) {
          this.tail = node.next;
        }
        node.next = node.next.next;
      }
      node = node.next;
    }
  }
}

module.exports = LinkedList;
