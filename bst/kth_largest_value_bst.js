class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function findKthLargestValueInBST(tree, k) { // Time: O(n), Space: O(n)
    const array = inOrderTraversal(tree);
    return array[k - 1];
}

function inOrderTraversal(tree, result=[]) {
    if (tree) {
        inOrderTraversal(tree.right, result);
        result.push(tree.value);
        inOrderTraversal(tree.left, result);
    }
    return result;
}

