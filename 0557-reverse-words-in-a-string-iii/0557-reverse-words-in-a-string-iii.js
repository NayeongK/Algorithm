/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  const words = s.split(" ");
  const result = [];
  
  for (let i = 0; i < words.length; i++) {
    result.push(words[i].split("").reverse().join(""))
  }
  
  return result.join(" ")
};