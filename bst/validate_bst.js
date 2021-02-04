/*
    Write a function that takes in a potentially invalid BST and returns a boolean
    representing whether the BST is valid
*/

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateBST(tree, min = -Infinity, max = Infinity) {
    if (!tree) return true;
    if (tree.value < min || tree.value >= max) return false;
    const left = validateBST(tree.left, min, tree.value);
    return left && validateBST(tree.right, tree.value, max);
}

// Time: O(n) time since we go through the entire tree;
// Space: O(d) where d is depth of tree since we will have at max, d frames on the stack