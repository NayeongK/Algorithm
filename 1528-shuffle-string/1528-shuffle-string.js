/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {
  const resultObj = {};
  for (let i = 0; i < s.length; i++) {
    resultObj[indices[i]] = s[i];
  }
  const result = Object.values(resultObj);

  return result.join("")
};
