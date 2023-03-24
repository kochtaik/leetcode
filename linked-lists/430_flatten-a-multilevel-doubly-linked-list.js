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
  const stack = [];
  
  while (curr) {
    if (curr.child) {
      if (curr.next) {
        stack.push(curr.next);      
      }

      curr.next = curr.child;
      curr.child = null;
      curr.next.prev = curr;
    } else if (!curr.next && stack.length) {
      curr.next = stack.pop();
      curr.next.prev = curr;
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


