import { Heap } from "./Heap";

export class MinHeap<T> extends Heap<T> {
  protected invariant(i: number, parentIndex: number) {
    return this.elements[i] >= this.elements[parentIndex];
  }
}
