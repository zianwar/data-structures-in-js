class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  get leftHeight() {
    if (!this.left) return 0;
    return this.left.height + 1;
  }

  get rightHeight() {
    if (!this.right) return 0;
    return this.right.height + 1;
  }

  get height() {
    return Math.max(this.rightHeight, this.leftHeight);
  }
}

class BinaryTree {
  constructor(node = null) {
    this.root = node;
  }

  height() {
    return this.root.height;
  }

  depth(targetNode) {
    let depth = 0;
    const stack = [this.root];
    while (stack.length) {
      const node = stack.pop();
      if (node.data === targetNode.data || !node.right || !node.left) {
        return depth;
      }
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
      depth++;
    }
  }

  traversePreOrder(callback) {
    const result = [];
    const traverse = current => {
      if (current.left) traverse(current.left);
      if (callback) callback(current);
      result.push(current.data);
      if (current.right) traverse(current.right);
    };
    traverse(this.root);
    return result;
  }

  traverseInOrder(callback) {
    const result = [];
    const traverse = current => {
      if (callback) callback(current);
      result.push(current.data);
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
    };
    traverse(this.root);
    return result;
  }

  traversePostOrder(callback) {
    const result = [];
    const traverse = current => {
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
      if (callback) callback(current);
      result.push(current.data);
    };
    traverse(this.root);
    return result;
  }

  traverseLevelOrder(callback) {
    const result = [];
    const queue = [this.root];

    while (queue.length) {
      const level = [];
      let size = queue.length;

      for (let i = 0; i < size; i++) {
        const node = queue.pop();

        if (node.left) queue.unshift(node.left);
        if (node.right) queue.unshift(node.right);

        if (callback) callback(node);
        level.push(node.data);
      }

      result.push(...level);
    }
    return result;
  }

  serialize() {
    const result = [];
    const queue = [this.root];

    let counter = 0;
    while (queue.length) {
      const level = [];
      let size = Math.pow(2, counter++);

      for (let i = 0; i < size; i++) {
        const node = queue.pop();

        queue.unshift(node ? node.left : null);
        queue.unshift(node ? node.right : null);

        level.push(node ? node.data : 'null');
      }

      if (level.every(n => n == 'null')) break;
      result.push(...level);
    }

    const str = `[${result.join(',')}]`;
    return str;
  }

  static deserialize(str = '') {
    if (str.toLowerCase() === "[]") return new BinaryTree();

    const array = str
      .replace('[', '')
      .replace(']', '')
      .split(',')
      .map(n => n === 'null' ? null : parseInt(n, 10));

    const rootNode = new TreeNode(array.shift());
    const queue = [rootNode];

    let counter = 0;
    while (queue.length && array.length) {
      let size = Math.pow(2, counter++);

      for (let i = 0; i < size; i++) {
        // Pop the next node from the queue
        const currentNode = queue.pop();

        // Pull the children of the `currentNode` from the array
        const item1 = array.shift();
        const firstNode = item1 != null ? new TreeNode(item1) : null;
        currentNode.left = firstNode;

        const item2 = array.shift();
        const secondNode = item2 != null ? new TreeNode(item2) : null;
        currentNode.right = secondNode;

        if (firstNode && firstNode.data != null) queue.unshift(firstNode);
        if (secondNode && secondNode.data != null) queue.unshift(secondNode);
      }
    }

    return new BinaryTree(rootNode);
  }

}

module.exports = {
  TreeNode,
  BinaryTree
};
