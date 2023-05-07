export class ListNode<T> {
  data: T;
  next: ListNode<T> = null;
  prev: ListNode<T> = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class DoubleLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;

  append(data: T): void {
    const node = new ListNode(data);

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

  prepend(data: T): void {
    const node = new ListNode(data);

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

  find(callback: (node: ListNode<T>) => boolean): ListNode<T> | null {
    let node = this.head;
    while (node) {
      if (callback(node)) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  replace(callback: (node: ListNode<T>) => boolean, data: T): ListNode<T> | null {
    let node = this.head;
    while (node) {
      if (callback(node)) {
        node.data = data;
        return node;
      }
      node = node.next;
    }
    return null;
  }

  delete(callback: (node: ListNode<T>) => boolean): void {
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
