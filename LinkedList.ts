export class ListNode<T> {
  val: T;
  next: ListNode<T> = null;

  constructor(val: T) {
    this.val = val;
  }
}

export class LinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;

  append(val: T): void {
    const node = new ListNode(val);

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

  prepend(val: T): void {
    const node = new ListNode(val);

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
