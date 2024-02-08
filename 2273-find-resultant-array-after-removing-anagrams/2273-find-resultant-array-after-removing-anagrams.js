/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
  let i = 0;

  while (i < words.length - 1) {
    const currentWordSorted = words[i].split("").sort().join("");
    const nextWordSorted = words[i + 1].split("").sort().join("");
    
    if (currentWordSorted === nextWordSorted) {
      words.splice(i + 1, 1);
    } else {
      i++;
    }
  }
  
  return words;
};