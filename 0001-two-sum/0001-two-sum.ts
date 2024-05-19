function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    let diff = target - nums[i];
    let pairIndex = nums.indexOf(diff, i+1);
    if (pairIndex !== -1 && pairIndex !== i) {
      return [i, pairIndex];
    }
  }
};