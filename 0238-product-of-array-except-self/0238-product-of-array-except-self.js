/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const length = nums.length;
  const output = [];

  let product = 1;
  for (let i = 0; i < length; i++) {
    output[i] = product;
    product *= nums[i];
  }

  product = 1;
  for (let i = length - 1; i >= 0; i--) {
    output[i] *= product;
    product *= nums[i];
  }

  return output;
};