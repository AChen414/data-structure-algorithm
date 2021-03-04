/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.



Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
*/

var mergeKLists = function (lists) {
    if (!lists.length) return null;

    while (lists.length !== 1) {
        let a = lists.shift();
        let b = lists.shift();
        lists.push(mergeSort(a, b));
    }
    return lists[0];
};

var mergeSort = function (a, b) {
    const start = new ListNode(0);
    let temp = start;
    while (a && b) {
        if (a.val < b.val) {
            temp.next = a;
            a = a.next;
        } else {
            temp.next = b;
            b = b.next;
        }
        temp = temp.next;
    }
    if (a) {
        temp.next = a;
    } else {
        temp.next = b;
    }
    return start.next;
}

// Time: O(nlogk)
// Space: O(1)