const { logValues } = require('./utils');

// Definition for a ListNode.
function ListNode(val,prev,next,child) {
   this.val = val;
   this.prev = prev;
   this.next = next;
   this.child = child;
};


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var flatten = function(list) {
  let curr = list;
  let tmp = null;

  while (curr) {
    if (curr.child) {
      tmp = curr.next
      curr.next = flatten(curr.child);
      curr.next.prev = curr;
      curr.child = null;
    }

    if (tmp && !curr.next) {
      curr.next = tmp;
      tmp.prev = curr;
      tmp = null;
    }

    curr = curr.next;
  }


  return list;
};

const first = new ListNode(1);
const second = new ListNode(2, first);
const third = new ListNode(3);

first.next = second;
first.child = third;

logValues(flatten(first))


