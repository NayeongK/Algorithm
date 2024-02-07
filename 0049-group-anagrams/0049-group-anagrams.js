/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const obj = {};
  let sortedStr = null;

  for (let i = 0; i< strs.length; i++) {
    sortedStr = strs[i].split("").sort().join();
    if (!obj[sortedStr]) {
      obj[sortedStr] = []
    }
    obj[sortedStr].push(strs[i])
  }
  
  return Object.values(obj);
};
