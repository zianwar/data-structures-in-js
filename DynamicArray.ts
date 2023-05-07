export class DynamicArray<T> {
  static DefaultSize = 20;
  static MinLoadFactor = 0.25;

  arr: T[];
  length = 0;
  capacity = DynamicArray.DefaultSize;

  constructor(size = DynamicArray.DefaultSize) {
    this.arr = new Array(size).fill(null);
    this.capacity = size;
  }

  get loadFactor(): number {
    return this.length / this.capacity;
  }

  /**
   * grow
   *
   * Expands the array using "table doubling" algorithm.
   * @param {int} factor growth factor, double (2x) by default
   */
  grow(factor = 2) {
    this.capacity = this.capacity * factor;
    // Create a new array with double the size of the original.
    const newArr = new Array(this.capacity).fill(null);
    // Copy over items from old array to the new array.
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
  }

  /**
   * shrink
   *
   * Shrinks the array when it gets too large.
   * @param {int} factor shrink factor, half (0.5) by default
   */
  shrink(factor = 0.5): void {
    this.capacity = Math.floor(this.capacity * factor);
    // Create a new array with half the size of the original.
    const newArr = new Array(this.capacity).fill(null);
    // Copy over items from old array to the new array.
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
  }

  append(item: T): void {
    if (this.length + 1 > this.capacity) {
      this.grow();
    }
    this.arr[this.length] = item;
    this.length++;
  }

  /**
   * delete
   *
   * Deletes an item from array by passing the item itself or by a callback.
   * @param {Function|Number|String} arg
   */
  delete(arg: T | ((item: T) => boolean)): void {
    if (!arg) throw new Error("Argument required to delete");
    if (!this.arr.length) return; // empty array.

    // const callback = typeof arg === "function" ? arg : null;
    const item = arg instanceof Number || arg instanceof String ? arg : null;

    let foundItem = null;
    let foundItemIndex = null;

    if (arg instanceof Function) {
      foundItem = this.arr.find((v) => arg(v));
      if (!foundItem) return;
    }

    foundItemIndex = this.arr.indexOf(foundItem || item);
    if (!foundItemIndex) return;

    // item found: remove
    this.arr[foundItemIndex] = null;
    // Copy items after `index` to fill gap.
    for (let i = foundItemIndex; i < this.length; i++) {
      this.arr[i] = this.arr[i + 1];
    }
    // Update length to account for the deleted item.
    this.length--;

    // If we have more than 75% extra empty space,
    // we shrink to half to preserve storage.
    if (this.loadFactor < DynamicArray.MinLoadFactor) {
      this.shrink();
    }
  }

  find(callback: (item: T) => boolean): T | undefined {
    return this.arr.find(callback);
  }
}
