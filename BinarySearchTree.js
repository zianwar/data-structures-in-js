const TreeNode = require('./BinaryTree').TreeNode;
const BinaryTree = require('./BinaryTree').BinaryTree;

class BinarySearchTree extends BinaryTree {

  insert(value) {
    const node = new TreeNode(value);

    if (!this.root) {
      this.root = node;
      return
    }

    const insertNode = (node, current) => {
      if (!current) return;

      if (node.data < current.data) {
        if (current.left) insertNode(node, current.left);
        else current.left = node;
      } else if (node.data > current.data) {
        if (current.right) insertNode(node, current.right);
        else current.right = node;
      }
    }

    insertNode(node, this.root);
  }

}

module.exports = {
  TreeNode,
  BinarySearchTree
};
