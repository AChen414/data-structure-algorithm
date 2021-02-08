class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // O(1) time 
    // O(1) space
    setHead(node) {
        if (this.head === null && this.tail === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.insertBefore(this.head, node);
    }

    // O(1) time 
    // O(1) space
    setTail(node) {
        if (this.head === null && this.tail === null) {
            this.setHead(node);
            return;
        }
        this.insertAfter(this.tail, node);
    }

    // O(1) time 
    // O(1) space
    insertBefore(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this.remove(nodeToInsert);
        nodeToInsert.prev = node.prev;
        nodeToInsert.next = node;
        if (!node.prev) {
            this.head = nodeToInsert;
        } else {
            node.prev.next = nodeToInsert;
        }
        node.prev = nodeToInsert;
    }

    // O(1) time 
    // O(1) space
    insertAfter(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this.remove(nodeToInsert);
        nodeToInsert.prev = node;
        nodeToInsert.next = node.next;
        if (!node.next) {
            this.tail = nodeToInsert;
        } else {
            node.next.prev = nodeToInsert;
        }
        node.next = nodeToInsert;
    }

    // O(p) time
    // O(1) space
    insertAtPosition(position, nodeToInsert) {
        if (position === 1) {
            this.setHead(nodeToInsert);
            return;
        }
        let current = this.head;
        let currentPosition = 1;
        while (current !== null && currentPosition !== position) {
            current = current.next;
            currentPosition++;
        }
        if (current !== null) {
            this.insertBefore(current, nodeToInsert);
        } else {
            this.setTail(nodeToInsert);
        }
    }

    // O(n) time
    // O(1) space
    removeNodesWithValue(value) {
        let current = this.head;
        while (current) {
            let nodeToRemove = current;
            current = current.next;
            if (nodeToRemove.value === value) this.remove(nodeToRemove);
        }
    }

    // O(1) time 
    // O(1) space
    remove(node) {
        if (this.head === node) {
            this.head = node.next;
        }
        if (this.tail === node) {
            this.tail = node.prev;
        }
        if (node.prev !== null) node.prev.next = node.next;
        if (node.next !== null) node.next.prev = node.prev;
        node.next = node.prev = null;
    }

    // O(n) time 
    // O(1) space
    containsNodeWithValue(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            } else {
                current = current.next;
            }
        }
        return false;
    }
}