const LinkedList = require('./LinkedList');

class Hashtable {
  static get defaultSize() {
    return 10;
  }

  constructor(size = Hashtable.defaultSize) {
    this.buckets = new Array(size).fill(null);
  }

  hashString(str) {
    const sumCharCodes = (sum, char) => {
      sum += char.charCodeAt();
      return sum;
    }
    const hash = Array.from(str).reduce(sumCharCodes, 0);
    return hash;
  }

  hash(key) {
    switch (typeof key) {
      case 'string':
        return this.hashString(key) % this.buckets.length;
      case 'number':
        return key % this.buckets.length;
      default:
        throw new Error(`invalid key type ${typeof key}`);
    }
  }

  get(key) {
    let hash = this.hash(key);

    const linkedList = this.buckets[hash];
    if (!linkedList) return null;

    const node = linkedList.find(node => node.data.key === key);
    if (!node) return null; // node not found

    return node.data.value;
  }

  set(key, value) {
    const hash = this.hash(key);

    if (!this.buckets[hash]) {
      const list = new LinkedList();
      list.append({key, value});
      this.buckets[hash] = list;
      return;
    }

    let linkedList = this.buckets[hash];
    let node = linkedList.find(node => node.data.key === key);

    if (!node) {
      linkedList.append(value);
      this.buckets[hash] = linkedList;
    } else {
      node.data = {key, value};
    }
  }

  delete(key) {
    const hash = this.hash(key);
    const linkedList = this.buckets[hash];
    if (!linkedList) return;
    linkedList.delete(node => node.data.key === key);
  }
}

module.exports = Hashtable;