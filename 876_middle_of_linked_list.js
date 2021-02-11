/*
Given a non - empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.



    Example 1:

Input: [1, 2, 3, 4, 5]
Output: Node 3 from this list(Serialization: [3, 4, 5])
The returned node has value 3.(The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
    ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
        Example 2:

    Input: [1, 2, 3, 4, 5, 6]
Output: Node 4 from this list(Serialization: [4, 5, 6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
*/

var middleNode = function (head) {
    if (head === null) return 0;
    let i = head;
    let length = 1;
    while (i.next !== null) {
        i = i.next;
        length++;
    }
    let middle = length % 2 ? Math.floor(length / 2) : length / 2;
    i = head;
    while (middle !== 0) {
        i = i.next;
        middle--;
    }
    return i
};

var middleNode = function (head) {  // Fast and Slow Pointers method
    let mid = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        mid = mid.next;
        fast = fast.next.next;
    }
    return mid;
}

// Time: O(n)
// Space: O(1);