const test = require('ava');
const TreeNode = require('./BinaryTree').TreeNode;
const BinaryTree = require('./BinaryTree').BinaryTree;

test('depth', t => {
  const node1 = new TreeNode(3);
  node1.left = new TreeNode(4);
  node1.right = new TreeNode(5);

  const node2 = new TreeNode(6);
  node2.left = new TreeNode(7);
  node2.right = new TreeNode(8);

  const root = new TreeNode(0);
  root.left = node1;
  root.right = node2;

  const binaryTree = new BinaryTree(root);

  t.is(binaryTree.depth(binaryTree.root), 0);
  t.is(binaryTree.depth(node1), 1);
  t.is(binaryTree.depth(node1.right), 2);
});

test('height', t => {
  const node1 = new TreeNode(3);
  node1.left = new TreeNode(4);
  node1.right = new TreeNode(5);

  const node2 = new TreeNode(6);
  node2.left = new TreeNode(7);
  node2.right = new TreeNode(8);

  const root = new TreeNode(0);
  root.left = node1;
  root.right = node2;

  const binaryTree = new BinaryTree(root);

  t.is(binaryTree.height(), 2);
});

test('traverseInOrder', t => {
  const node1 = new TreeNode(3);
  node1.left = new TreeNode(4);
  node1.right = new TreeNode(5);

  const node2 = new TreeNode(6);
  node2.left = new TreeNode(7);
  node2.right = new TreeNode(8);

  const root = new TreeNode(0);
  root.left = node1;
  root.right = node2;

  /*
   *       0
   *     /   \
   *    3     6
   *   / \   / \
   *  4   5 7   8
  */
  const binaryTree = new BinaryTree(root);

  t.deepEqual(binaryTree.traverseInOrder(), [0, 3, 4, 5, 6, 7, 8]);
});

test('traversePreOrder', t => {
  const node1 = new TreeNode(3);
  node1.left = new TreeNode(4);
  node1.right = new TreeNode(5);

  const node2 = new TreeNode(6);
  node2.left = new TreeNode(7);
  node2.right = new TreeNode(8);

  const root = new TreeNode(0);
  root.left = node1;
  root.right = node2;

  /*
   *       0
   *     /   \
   *    3     6
   *   / \   / \
   *  4   5 7   8
  */
  const binaryTree = new BinaryTree(root);

  t.deepEqual(binaryTree.traversePreOrder(), [4, 3, 5, 0, 7, 6, 8]);
});

test('traversePostOrder', t => {
  const node1 = new TreeNode(3);
  node1.left = new TreeNode(4);
  node1.right = new TreeNode(5);

  const node2 = new TreeNode(6);
  node2.left = new TreeNode(7);
  node2.right = new TreeNode(8);

  const root = new TreeNode(0);
  root.left = node1;
  root.right = node2;

  /*
   *       0
   *     /   \
   *    3     6
   *   / \   / \
   *  4   5 7   8
  */
  const binaryTree = new BinaryTree(root);

  t.deepEqual(binaryTree.traversePostOrder(), [4, 5, 3, 7, 8, 6, 0]);
});

test('traverseLevelOrder', t => {
  const node1 = new TreeNode(3);
  node1.left = new TreeNode(4);
  node1.right = new TreeNode(5);

  const node2 = new TreeNode(6);
  node2.left = new TreeNode(7);
  node2.right = new TreeNode(8);

  const root = new TreeNode(0);
  root.left = node1;
  root.right = node2;

  /*
   *       0
   *     /   \
   *    3     6
   *   / \   / \
   *  4   5 7   8
  */
  const binaryTree = new BinaryTree(root);

  t.deepEqual(binaryTree.traverseLevelOrder(), [0, 3, 6, 4, 5, 7, 8]);
});

test('serialize', t => {
  const node1 = new TreeNode(2);
  const node2 = new TreeNode(3);
  node2.left = new TreeNode(4);
  node2.right = new TreeNode(5);

  const root = new TreeNode(1);
  root.left = node1;
  root.right = node2;
  const binaryTree = new BinaryTree(root);
  /*
   *    1
   *   / \
   *  2   3
   *     / \
   *    4   5
  */
  t.is(binaryTree.serialize(), '[1,2,3,null,null,4,5]');
  t.is(new BinaryTree().serialize(), '[]');
});

test('deserialize', t => {
  /*
   *    1
   *   / \
   *  2   3
   *     / \
   *    4   5
  */
 t.is(BinaryTree.deserialize('[]').root, null);
 t.is(BinaryTree.deserialize('[]').serialize(), '[]');
 t.is(BinaryTree.deserialize('[1,null,2]').serialize(), '[1,null,2]');
 t.is(BinaryTree.deserialize('[1,2,3,null,null,4,5]').serialize(), '[1,2,3,null,null,4,5]');
});
