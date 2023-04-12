/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const dirs = path.split('/');
  const st = [];

  for (const dir of dirs) {
    if (dir && dir !== '..' && dir !== '.') {
      st.push(dir);
    } else if (st.length && dir === '..') {
      st.pop();
    }
  }

  
  return '/' + st.join('/')
};

console.log(simplifyPath('/home//foo/'))
console.log(simplifyPath('/../'))
console.log(simplifyPath('/home/'))
console.log(simplifyPath("/home/user/Documents/../../../usr/local/bin"))
console.log(simplifyPath("/home/user/./Downloads/../Pictures/././")) // "/home/user/Pictures"
console.log(simplifyPath("/a/./b/../../c/")) // "/home/user/Pictures"
console.log(simplifyPath("/a/../../b/../c//.//")) // "/home/user/Pictures"
