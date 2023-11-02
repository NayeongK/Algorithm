/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
  const arrayX = [];
  const arrayY = [];
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (i < n) {
      arrayX.push(nums[i])
    } else {
      arrayY.push(nums[i])
    }
  }
  
  for (let i = 0; i < n; i++) {
    result.push(arrayX[i])
    result.push(arrayY[i])
  }
  
  return result;
};