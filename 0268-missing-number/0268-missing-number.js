/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  let sumTotal = (nums.length * (nums.length + 1)) / 2
  
  for (const num of nums) {
    sumTotal -= num;
  }
  
  return sumTotal;
};
