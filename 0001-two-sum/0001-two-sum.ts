function twoSum(nums: number[], target: number): number[] {
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = target - nums[i];
  }
  
  for (let i = 0; i < nums.length; i++) {
    let pairValue = obj[nums[i]]
    let pairIndex = nums.indexOf(pairValue, i + 1)
    if (pairIndex !== -1) {
      return [i, pairIndex] 
    }
  }
};
