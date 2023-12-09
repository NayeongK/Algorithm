/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortEvenOdd = function(nums) {
  const result = [];
  const even = [];
  const odd = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 1) {
      odd.push(nums[i]);
    } else {
      even.push(nums[i])
    }
  }
  
  even.sort((a, b) => a - b);
  odd.sort((a, b) => b - a);
  
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result.push(even.shift());
    } else {
      result.push(odd.shift());
    }
  }
  
  return result;
};