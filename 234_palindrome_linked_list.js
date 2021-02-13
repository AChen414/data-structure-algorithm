/*
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

*/

var isPalindrome = function (head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let left = head;
    let right = reverseLinkedList(slow);
    while (right !== null) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    return true;
};

var reverseLinkedList = function (head) {
    let prev = null;
    while (head !== null) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

// Time: O(n)
// Space: O(1)