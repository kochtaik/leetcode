/**
 * Link: https://leetcode.com/problems/pascals-triangle-ii
 * Solved in 23 min.
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];

  const prev = getRow(rowIndex - 1);
  const cur = [];

  for (let i = 0; i < prev.length - 1; i++) {
    cur.push(prev[i] + prev[i + 1]);
  }

  return [1, ...cur, 1];
};

console.log(getRow(1))