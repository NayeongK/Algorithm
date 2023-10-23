/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function(s) {
  const words = s.split(' ');
  words.sort((a, b) => a[a.length - 1] - b[b.length - 1]);

  return words.map(word => word.slice(0, -1)).join(' ');
};