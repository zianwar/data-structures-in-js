export abstract class Heap<T> {
  protected elements: T[] = [];

  private leftIndex = (i: number) => 2 * i + 1;
  private rightIndex = (i: number) => 2 * (i + 1);
  private parentIndex = (i: number) => (i === 0 ? null : Math.floor(i / 2));

  private hasLeft = (i: number) => !!this.left(i);
  private hasRight = (i: number) => !!this.right(i);

  private isValid = (i: number) => !!this.elements[i];

  private swap(i: number, j: number) {
    let tmp = this.elements[i];
    this.elements[i] = this.elements[j];
    this.elements[j] = tmp;
  }

  private left = (i: number) => this.elements[this.leftIndex(i)];
  private right = (i: number) => this.elements[this.rightIndex(i)];
  private parent = (i: number) => {
    const idx = this.parentIndex(i);
    return idx != null ? this.elements[idx] : null;
  };

  /**
   * peek - O(1)
   *
   * Returns the top element of the heap without removing it.
   */
  public peek(): T | undefined {
    return this.elements[0];
  }

  /**
   * poll - O(log(n))
   *
   * Returns the top element of the heap and removes it, using the following algorithm:
   * 1. First, we remove the top element and swap it with the last element in the heap
   *    (the bottommost, rightmost element).
   * 2. Then, we bubble down this element,
   *    swapping it with one of its children until the min-heap property is restored.
   * 3. Do we swap it with the left child or the right child?
   *    That depends on their values. There’s no inherent ordering between the left and right element,
   *    but you’ll need to take the smaller one to maintain the min-heap ordering.
   */
  public poll(): T | undefined {
    if (this.elements.length === 1) {
      return this.elements.pop();
    }

    // move last element to the front
    let first = this.elements[0];
    let last = this.elements.pop() as T;
    this.elements[0] = last;

    this.heapify();

    return first;
  }

  public add(element: T) {
    this.elements.push(element);
    this.heapify();
  }

  /**
   * heapify - O(n)
   *
   * Maintains the heap property of the elements array.
   * It iterates through the array, swapping elements when necessary to satisfy
   * the heap invariant defined by child class (Max or Min).
   */
  private heapify(): void {
    if (this.elements.length <= 1) return;

    // current index: first element index.
    let i = 0;
    while (this.isValid(i)) {
      if (this.hasLeft(i) && !this.invariant(this.leftIndex(i), i)) {
        this.swap(i, this.leftIndex(i));
        i = this.leftIndex(i);
        continue;
      }

      if (this.hasRight(i) && !this.invariant(this.rightIndex(i), i)) {
        this.swap(i, this.rightIndex(i));
      }
      i = this.rightIndex(i);
    }
  }

  protected invariant(i: number, parentIndex: number): boolean {
    throw new Error("Not implemented");
  }
}
