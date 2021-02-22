class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    printLinkedList(head) {
        let currentNode = head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        return;
    }

}

function removeDuplicates(linkedList) {
    while (linkedList !== null) {
        if (linkedList.next !== null && linkedList.value === linkedList.next.value) {
            let temp = linkedList.next;
            linkedList.next = linkedList.next.next;
            temp.next = null;
        } else {
            linkedList = linkedList.next;
        }
    }
    return;
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

removeDuplicates(one);

one.printLinkedList(one);

// Time: O(n) 
// Space: O(1)