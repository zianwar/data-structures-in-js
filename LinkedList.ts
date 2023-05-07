export class ListNode<T> {
  data: T;
  next: ListNode<T> = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;

  append(data: T): void {
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

  prepend(data: T): void {
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

  delete(callback: (node: ListNode<T>) => boolean): void {
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
