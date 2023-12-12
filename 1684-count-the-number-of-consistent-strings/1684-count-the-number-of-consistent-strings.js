/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = function(allowed, words) {
  const allowedArray = allowed.split("");
  let count = 0;
  
  for (let i = 0; i < words.length; i++){
    let word = words[i];
    for (let j = 0; j < allowedArray.length; j++) {
      word = word.replaceAll(allowedArray[j], " ");
    }
    
    if (!word.trim()) {
      count++;
    }
  }
  
  return count;
};