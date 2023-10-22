/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = function (nums) {
  const sortedNums = nums.sort((a, b) => b - a);
  
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] > 0 && nums.includes(-sortedNums[i])) {
      return sortedNums[i];
    }
  }

  return -1;
};