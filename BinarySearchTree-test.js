const test = require('ava');
const BinarySearchTree = require('./BinarySearchTree').BinarySearchTree;
const TreeNode = require('./BinarySearchTree').TreeNode;
const utils = require('./utils');

test('insert', t => {
  const bst1 = new BinarySearchTree();

  t.deepEqual(utils.binarySearchTreeToArray(bst1), []);
  bst1.insert(10);
  t.deepEqual(utils.binarySearchTreeToArray(bst1), [10]);

  /*
   *    5
   *   / \
   *  3   10
   *   \
   *    4
  */
  const bst2 = utils.arrayToBinarySearchTree([5, 3, 10, null, 4, null, null]);
  bst2.insert(7);
  t.deepEqual(utils.binarySearchTreeToArray(bst2), [5, 3, 10, null, 4, 7, null]);
});
