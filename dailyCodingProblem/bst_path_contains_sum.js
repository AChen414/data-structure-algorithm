/*
This problem was asked by Uber.

Given a binary tree and an integer k, return whether there exists a root-to-leaf path that sums up to k.

For example, given k = 18 and the following binary tree:

    8
   / \
  4   13
 / \   \
2   6   19
Return True since the path 8 -> 4 -> 6 sums to 18.
*/

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        let currentNode = this;
        while (true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = new BST(value);
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = new BST(value);
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
        return this;
    }
}

function containsSum(root, sum) {
    if (!root) return false;
    if (!root.left && !root.right) {
        return root.value === sum;
    } else {
        return containsSum(root.left, sum - root.value) || containsSum(root.right, sum - root.value);
    }
}

let tree = new BST(8);
tree.insert(4);
tree.insert(13);
tree.insert(19);
tree.insert(2);
tree.insert(6);

console.log(containsSum(tree, 18));

// Time: O(n) since we will look through all elements
// Space: O(log(n)) since we will have log(n) frames on the call stack