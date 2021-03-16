function minHeightBst(array) {
    return minHeightBstHelper(array)
}

function minHeightBstHelper(array, tree = null) {
    if (!array.length) return;
    let mid = Math.floor(array.length / 2);
    if (tree === null) {
        tree = new BST(array[mid])
    } else {
        tree.insert(array[mid]);
    }
    minHeightBstHelper(array.slice(0, mid), tree);
    minHeightBstHelper(array.slice(mid + 1, array.length), tree)
    return tree
}

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}

// Time: O(N)
// Space: O(N)