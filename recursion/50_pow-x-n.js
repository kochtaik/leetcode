/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

/**
 * Link:https://leetcode.com/problems/powx-n/
 * Not solved (bad constraints)
 */

var myPow = function(x, n, acc = 1) {
  if (n === 0) return acc;
  
  if (n < 0) {
    return myPow(1 / x, n * -1, acc)
  }
  
  return myPow(x, n - 1, x * acc);
};

console.log(myPow(2, -2))