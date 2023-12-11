/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParityII = function(nums) {
  const oddArray = [];
  const evenArray = [];
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenArray.push(nums[i]);
    } else {
      oddArray.push(nums[i])
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 1) {
      result.push(oddArray.pop())
    } else {
      result.push(evenArray.pop())
    }
  }
  
  return result;
};