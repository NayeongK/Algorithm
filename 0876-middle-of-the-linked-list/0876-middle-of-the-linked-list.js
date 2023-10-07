/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const middleNode = function(head) {
  let length = 0;
  let current = head;

  while (current !== null) {
      length++;
      current = current.next;
  }

  const mid = Math.floor(length / 2);
  current = head;

  for (let i = 0; i < mid; i++) {
      current = current.next;
  }

  return current;
};