// https://leetcode.com/problems/add-two-numbers/

const { ListNode, generateList } = require('./utils')

function addTwoNumbers(l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let carry = 0;
  const head = new ListNode(-1);
  let tail = head;

  while (p1 || p2) {
    const sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + carry
    tail.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    tail = tail.next;
  }
  
  if (carry > 0) {
    tail.next = new ListNode(carry)
  }

  return head.next;
}

const list1 = generateList([2,3]);
const list2 = generateList([5,6,4]);
console.dir(addTwoNumbers(list1, list2), { depth: null });