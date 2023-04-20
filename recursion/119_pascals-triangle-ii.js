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
  else if (rowIndex === 1) return [1, 1];

  const arr = getRow(rowIndex - 1)
  const res =  arr.reduce((acc, val, i) => {
    const next = arr[i + 1];
    if (next) acc.push(val + next); 
    return acc;
  }, [])

  return [1, ...res, 1]
};

console.log(getRow(5))