const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.nodeList = new ListNode();
  }

  getUnderlyingList() {
    let current = this.head;

    return current
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node
    }

    this.length++;
  }
  dequeue() {
    const headValue = this.head;
    this.head = this.head.next; 
    this.length--;

    return headValue.value; 
    
}
}

module.exports = {
  Queue
};
