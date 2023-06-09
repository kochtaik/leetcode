// Definition for a Node.
function Node(val, next = null, random = null) {
  this.val = val;
  this.next = next;
  this.random = random;
};

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  const newHead = new Node(-1);
  let tail = newHead;
  let curr = head;
  const hash = new Map();

  while (curr) {
    const newNode = new Node(curr.val)
    hash.set(curr, newNode);
    tail.next = newNode;
    tail = tail.next;
    curr = curr.next;
  }

  curr = head;
  tail = newHead;
  
  while (curr) {
    const newNode = hash.get(curr);
    newNode.random = hash.get(curr.random);
    curr = curr.next;
  }

  return newHead.next;
};

const first = new Node(7);
const second = new Node(13);
const third = new Node(11);
const fourth = new Node(10);
const fifth = new Node(1);

first.next = second;
first.random = null;

second.next = third;
second.random = first;

third.next = fourth;
third.random = fifth;

fourth.next = fifth;
fourth.random = third;

fifth.next = null;
fifth.random = first;
copyRandomList(first);


// const first = new Node(1);
// const second = new Node(2);

// first.next = second;
// first.random = second;
// second.random = second;


// const first = new Node(3)
// const second = new Node(3)
// const third = new Node(3)
// first.next = second;
// first.random = null;
// second.next = third;
// second.random = first;
// third.random = null

