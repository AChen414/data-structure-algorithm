/*
Write a program to merge two binary trees. Each node in the new tree should hold a value equal to the sum of the values of the corresponding nodes of the input trees.

If only one input tree has a node in a given position, the corresponding node in the new tree should match that input node.

*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function mergeTrees(a, b) {
    if (a === null) {
        return b;
    }
    if (b === null) {
        return a;
    }
    a.value += b.value;
    a.left = mergeTrees(a.left, b.left);
    a.right = mergeTrees(a.right, b.right);
    return a;
}

// Time: O(n)
// Space: 
//  Avg: O(logn)
//  Worst: O(n)

let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.right = new Node(6);

let root2 = new Node(4);
root2.left = new Node(1);
root2.right = new Node(7);
root2.left.left = new Node(3);
root2.right.left = new Node(2);
root2.right.right = new Node(6);

mergeTrees(root1, root2);
console.log(root1);