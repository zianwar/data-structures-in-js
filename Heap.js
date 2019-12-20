class Heap {
  constructor() {
    this.items = [];
  }

  leftIndex(i) {
    return 2 * i + 1;
  }
  rightIndex(i) {
    return 2 * (i + 1);
  }
  parentIndex(i) {
    return i === 0 ? null : Math.floor(i / 2);
  }

  left(i) {
    return this.items[this.leftIndex(i)];
  }
  right(i) {
    return this.items[this.leftIndex(i)];
  }
  parent(i) {
    return this.items[this.parentIndex(i)];
  }

  hasLeft(i) {
    return this.items[this.leftIndex(i)] != null;
  }
  hasRight(i) {
    return this.items[this.rightIndex(i)] != null;
  }
  hasParent(i) {
    return this.items[this.parentIndex(i)] != null;
  }

  isValid(i) {
    return this.items[i] != null;
  }

  swap(i, j) {
    let tmp = this.items[i];
    this.items[i] = this.items[j];
    this.items[j] = tmp;
  }

  peek() {
    return this.items[0];
  }

  poll() {
    if (this.items.length === 1) {
      return this.items.pop();
    }

    let first = this.items[0];
    let last = this.items.pop();
    this.items[0] = last;
    this.heapifyDown();
    return first;
  }

  add(item) {
    this.items.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    if (this.items.length <= 1) return;
    // current index: last item index.
    let i = this.items.length - 1;
    while (this.isValid(i) && this.hasParent(i)) {
      if (this.items[i] > this.parent(i)) {
        this.swap(i, this.parentIndex(i));
      }
      i = this.parentIndex(i);
    }
  }

  heapifyDown() {
    // current index: first item index.
    let i = 0;
    while (this.isValid(i)) {
      if (this.hasLeft(i) && this.left(i) > this.items[i]) {
        this.swap(i, this.leftIndex(i));
        i = this.leftIndex(i);
        continue;
      }
      if (this.hasRight(i) && this.right(i) > this.items[i]) {
        this.swap(i, this.rightIndex(i));
      }
      i = this.rightIndex(i);
    }
  }

  compare() {
    throw new Error('Not implemented');
  }
}

class MinHeap extends Heap {
  compare(child, parent) {
    return child >= parent;
  }
}

class MaxHeap extends Heap {
  compare(child, parent) {
    return child <= parent;
  }
}

module.exports = {
  MinHeap,
  MaxHeap
};

let h = new MinHeap();
h.add(1);
h.add(10);
console.log(h.items);
console.log(h.poll());
console.log(h.items);
h.add(5);
h.add(9);
h.add(3);
console.log(h.items);
console.log(h.poll());
console.log(h.items);
