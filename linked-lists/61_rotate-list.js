const { ListNode, generateList, logList } = require('./utils');

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var rotateRight = function(head, k) {
  if (!head || k === 0) {
    return head;
  }

  let len = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    len++
  }

  const shift = k % len;
  if (shift === 0) return head;

  let newTail = head;

  for (let i = 0; i < len - shift - 1; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;
  newTail.next = null;
  tail.next = head;
  return newHead;
};

const list = generateList([1,2]);
logList(rotateRight(list, 2));