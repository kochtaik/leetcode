const { ListNode } = require('./utils');

// const tmp = head;
// tmp.next = head.next
// head = head.next;
// head.next = tmp;
// return head

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) return head;

  const tmp = head;
  head = head.next;
  tmp.next = head.next
  head.next = tmp;

  if (head.next.next) {
    head.next.next = swapPairs(head.next.next);  
  }

  return head  
};

const l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(5);
l.next.next.next.next.next = new ListNode(6);
console.log(swapPairs(l))
