/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]


 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
    @param {TreeNode} root
    @return {number[][]}
*/

var levelOrder = function (root) { // iterative
    if (!root) return [];
    const queue = [root];
    const result = [];
    while (queue.length) {
        let queueLength = queue.length;
        const level = [];
        for (let i = 0; i < queueLength; i++) {
            let current = queue.shift();
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            level.push(current.val);
        }
        result.push(level);
    }
    return result;
};

var levelOrder = function (root) { // recursive 
    const result = [];
    let level = 0;
    bfsTraversal(root, result, level);
    return result;
};

var bfsTraversal = function (root, result, level) {
    if (!root) return;
    if (!result[level]) {
        result[level] = [root.val];
    } else {
        result[level].push(root.val);
    }
    bfsTraversal(root.left, result, level + 1);
    bfsTraversal(root.right, result, level + 1);
}

// Time: O(n)
// Space: O(n) since we could entire tree in queue