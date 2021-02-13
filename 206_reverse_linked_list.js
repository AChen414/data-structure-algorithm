/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// var reverseList = function (head) {
//     let prev = null;
//     while (head !== null) {
//         let next = head.next;
//         head.next = prev;
//         prev = head;
//         head = next;
//     }
//     return prev;
// };

var reverseList = function (head, prev=null) {
    if (head === null) return prev;
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
    return reverseList(head, prev);
}

var printLinkedList = function(head) {
    const result = [];
    while (head !== null) {
        console.log(head);
        result.push(head.value);
        head = head.next;
    }
    return result;
}

let e = new LinkedListNode(5);
let d = new LinkedListNode(4);
d.next = e;
let c = new LinkedListNode(3);
c.next = d;
let b = new LinkedListNode(2);
b.next = c;
let a = new LinkedListNode(1);
a.next = b;

// console.log(printLinkedList(reverseList(a)));
// console.log(printLinkedList(e))
// console.log(printLinkedList(reversed));

// Time: O(n)
// Space: O(1)
// Space: O(n) with recursion