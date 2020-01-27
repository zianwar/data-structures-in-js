const TreeNode = require('./BinarySearchTree').TreeNode;
const BinaryTree = require('./BinaryTree').BinaryTree;
const BinarySearchTree = require('./BinarySearchTree').BinarySearchTree;

/* ------- Linked List utils ------- */

var arrayToLinkedList = function(arr) {
  let head = new ListNode(arr[0]);
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    node = new ListNode(arr[i]);
    prev.next = node;
    prev = node;
  }
  return head;
};

var linkedListToArray = function(head) {
  let arr = [];
  let cur = head;
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  return arr;
};

/* ------- Binary Tree utils ------- */

function arrayToTree(array = []) {
  if (!array.length) return null;

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

  return rootNode;
}

function arrayToBinaryTree(arr) {
  return new BinaryTree(arrayToTree(arr));
}

function arrayToBinarySearchTree(arr) {
  return new BinarySearchTree(arrayToTree(arr));
}

function binaryTreeToArray(binaryTree = null) {
  if (!binaryTree) return [];
  return binaryTree.traverseLevelOrder();
}

function binarySearchTreeToArray(bst = null) {
  if (!bst) return [];
  if (bst.root == null) return [];
  return bst.serialize()
    .replace('[', '')
    .replace(']', '')
    .split(',')
    .map(n => n === 'null' ? null : parseInt(n, 10));
}

module.exports = {
  arrayToLinkedList,
  linkedListToArray,

  arrayToBinaryTree,
  binaryTreeToArray,

  arrayToBinarySearchTree,
  binarySearchTreeToArray
};
