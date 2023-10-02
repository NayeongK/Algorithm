/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  const result = s.trim().split(" ");
  const lastWord = result[result.length - 1]
  
  return lastWord.length
};
