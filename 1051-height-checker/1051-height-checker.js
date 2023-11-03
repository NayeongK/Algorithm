/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
  const copiedHeights = [...heights];
  const sortedArray = copiedHeights.sort((a, b) => (a - b));
  let count = 0;
  
  for (let i = 0; i < heights.length; i++) {
    if (sortedArray[i] !== heights[i]) {
      count++;
    }
  }
  
  return count;
};