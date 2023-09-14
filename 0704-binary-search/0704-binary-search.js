/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let minIndex = 0;
  let maxIndex = nums.length - 1;
  
  while (minIndex <= maxIndex) {
    const midIndex = Math.floor((maxIndex + minIndex) / 2);

    if (nums[midIndex] === target) {
      return midIndex;
    }
    
    if (nums[midIndex] < target) {
      minIndex++;
    }
    
    if (nums[midIndex] > target) {
      maxIndex--;
    }
  }
  
  return -1;
};
