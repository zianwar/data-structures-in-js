import { ListNode } from "./LinkedList";

import { TreeNode } from "./BinarySearchTree";
import BinaryTree from "./BinaryTree";
import BinarySearchTree from "./BinarySearchTree";

/* ------- Linked List utils ------- */

export function arrayToLinkedList(arr: any): ListNode<any> {
  let head = new ListNode<any>(arr[0]);
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    prev.next = node;
    prev = node;
  }
  return head;
}

export function linkedListToArray(head: ListNode<any>): any[] {
  let arr = [];
  let cur = head;
  while (cur) {
    arr.push(cur.data);
    cur = cur.next;
  }
  return arr;
}

/* ------- Binary Tree utils ------- */

export function arrayToTree(array = []) {
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

export function arrayToBinaryTree(arr) {
  return new BinaryTree(arrayToTree(arr));
}

export function arrayToBinarySearchTree(arr) {
  return new BinarySearchTree(arrayToTree(arr));
}

export function binaryTreeToArray(binaryTree = null) {
  if (!binaryTree) return [];
  return binaryTree.traverseLevelOrder();
}

export function binarySearchTreeToArray(bst = null) {
  if (!bst) return [];
  if (bst.root == null) return [];
  return bst
    .serialize()
    .replace("[", "")
    .replace("]", "")
    .split(",")
    .map((n) => (n === "null" ? null : parseInt(n, 10)));
}
