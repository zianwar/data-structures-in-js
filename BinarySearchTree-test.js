const BinarySearchTree = require("./BinarySearchTree").BinarySearchTree;
const TreeNode = require("./BinarySearchTree").TreeNode;
const utils = require("./utils");

test("insert", () => {
  const bst1 = new BinarySearchTree();

  expect(utils.binarySearchTreeToArray(bst1)).toEqual([]);
  bst1.insert(10);
  expect(utils.binarySearchTreeToArray(bst1)).toEqual([10]);

  /*
   *    5
   *   / \
   *  3   10
   *   \
   *    4
   */
  const bst2 = utils.arrayToBinarySearchTree([5, 3, 10, null, 4, null, null]);
  bst2.insert(7);
  expect(utils.binarySearchTreeToArray(bst2)).toEqual([5, 3, 10, null, 4, 7, null]);
});
