/*

  Contains Duplicate (https://leetcode.com/problems/contains-duplicate/)
  : Given an integer array nums, return true if any value appears at least twice
  in the array, and return false if every element is distinct. 

  (e.g. 1)
  Input: nums = [1, 2, 3, 1]
  Output: true

  (e.g. 2)
  Input: nums = [1, 2, 3, 4]
  Output: false

  (e.g. 3)
  Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
  Output: true

  (constraints)
  1 <= nums.length <= 10**5
  -10**9 <= nums[i] <= 10**9
  */

/**
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
function containsDuplicate(nums) {
  if (!Array.isArray(nums)) {
    throw new TypeError("invalid input type: input should be an array");
  }

  if (nums.length < 1 || nums.length > Math.pow(10, 5)) {
    throw new RangeError(
      "invalid input array length: 1<= nums.length <= 10**5"
    );
  }

  // solution 1: w/ object
  const numMap = {};

  for (const num of nums) {
    if (num in numMap) {
      return true;
    }

    numMap[num] = 1;
  }

  return false;

  // solution 2: w/ set

  /*
  return nums.length !== new Set(nums).size;
   */
}

module.exports = containsDuplicate;
