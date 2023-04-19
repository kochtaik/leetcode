/**
 * @param {string[]} s
 * @return {void} 
 */
function reverseStringNotInPlace(s) {
  return s.length ? [...reverseStringNotInPlace(s.slice(1)), ...s.slice(0,1)] : '';
}

/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseStringIteratively(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    const tmp = s[i];
    s[i] = s[j];
    s[j] = tmp;
    i++, j--;
  }
}

/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s, i = 0, j = s.length - 1) {
  if (i > j) return;
  const tmp = s[i];
  s[i] = s[j];
  s[j] = tmp;
  reverseString(s, i + 1, j - 1)
}

const s = ["r","o","c","k"];
reverseString(s);
console.log(s);