function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

export function generateList(values) {
  if (!values.length) {
    return null;
  }

  return new ListNode(values[0],   
  generateList(values.slice(1)));
}

export function insertAtEnd(head, node) {
  let current = head;

  while (current) {
    if (current.next === null) {
      current.next = node;
      return;
    }

    current = current.next
  }
}

module.exports = { generateList, insertAtEnd, ListNode };