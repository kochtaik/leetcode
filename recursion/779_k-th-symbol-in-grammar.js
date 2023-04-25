/**
 * Link: https://leetcode.com/problems/k-th-symbol-in-grammar
 * Solved in about 2 hrs. with tips
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
  if (n === 1) return 0;
  const parentK = kthGrammar(n - 1, Math.floor(k / 2 + k % 2));

  if (k % 2 === 0) {
    return parentK === 0 ? 1 : 0
  }

  return parentK;
};

console.log(kthGrammar(2, 1))