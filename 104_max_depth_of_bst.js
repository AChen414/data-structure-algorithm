/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

function maxDepth(root) { // recursive
    if (root === null) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

function maxDepth(root) { // iterative
    if (root === null) return 0;
    const queue = [root];
    let depth = 0;
    while (!queue.length) {
        depth++;
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }
        queue.splice(0, len);
    }
    return depth;
}

// Time: O(n) since we visit all nodes
// Space: O(n) since we could have all nodes on call stack if it's balanced