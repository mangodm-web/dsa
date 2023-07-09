/*

  Two Sum (https://leetcode.com/problems/two-sum/)
  : Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  (e.g. 1)
  Input: nums = [2,7,11,15], target = 9
  Output: [0, 1]

  (e.g. 2)
  Input: nums = [3,2,4], target = 6
  Output: [1, 2]

  (e.g. 3)
  Input: nums = [3,3], target = 6
  Output: [0, 1]

  (constraints)
  2 <= nums.length <= 10**4
  -10**9 <= nums[i] <= 10**9
  -10**9 <= target <= 10**9

  Only one valid answer exists.
  */

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const gap = target - nums[i];

    if (nums[i] in hashMap) {
      return [hashMap[nums[i]], i];
    } else {
      hashMap[gap] = i;
    }
  }

  return [];
}

module.exports = twoSum;
