/*
Reverse a linked list in place
*/

class LinkedList {
    constructor(value, next) {
        this.value = value;
        this.next = next ? next : null;
    }

    printLinkedList(node) {
        while (node) {
            console.log(node.value);
            node = node.next;
        }
        return;
    }
}

const reverseLinkedList = (head) => {
    let prevNode = null;
    let currentNode = head;
    while (currentNode !== null) {
        let nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    return prevNode;
}

let one = new LinkedList(1);
let one2 = new LinkedList(1);
one.next = one2;
let three = new LinkedList(3);
one2.next = three;
let four = new LinkedList(4);
three.next = four;
let four2 = new LinkedList(4);
four.next = four2;
let four3 = new LinkedList(4);
four2.next = four3;
let five = new LinkedList(5);
let five2 = new LinkedList(5);
four3.next = five;
five.next = five2;

// one.printLinkedList(one);
reverseLinkedList(one);
one.printLinkedList(five2);