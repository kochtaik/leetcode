function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function generateList(values) {
  if (!values.length) {
    return null;
  }

  return new ListNode(values[0],   
  generateList(values.slice(1)));
}

function insertAtEnd(head, node) {
  let current = head;

  while (current) {
    if (current.next === null) {
      current.next = node;
      return;
    }

    current = current.next
  }
}

function logValues(head) {
  let current = head;
  const values = [];
  while (current) {
    values.push(current.val)
    current = current.next;
  }
  console.log(values);
}

function logList(head) {
  console.dir(head, { depth: null })
}

module.exports = { generateList, insertAtEnd, ListNode, logValues, logList };