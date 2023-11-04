/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  const result = [[]];

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const size = result.length;
    
    for (let j = 0; j < size; j++) {
      const currentSubset = result[j];
      const newSubset = [...currentSubset, currentNum];
      result.push(newSubset);
    }
  }

  return result;
};