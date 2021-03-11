/*
Write a function that takes in a BST and a target integer value and returns the closest value to that target value contained in the BST
*/


function findClosestValueInBst(tree, target) { // Solved recursively
    return findClosestValueInBstHelper(tree, target, Infinity);

    // AVG: Time: O(log(n)), Space: O(log(n))
    // Worst: Time: O(n), Space: O(n)
}

function findClosestValueInBstHelper(tree, target, closest) {
    if (tree === null) return closest;

    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value;
    }

    if (target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closest);
    } else if (target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
        return closest
    }
}