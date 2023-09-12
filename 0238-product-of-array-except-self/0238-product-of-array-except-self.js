/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  let totalProduct = 1;
  const pre = [];
  const post = [];

  for (let i = 0; i < nums.length; i++) {
    totalProduct *= isNaN(nums[i - 1]) ? 1 : nums[i - 1];
    pre.push(totalProduct);
  }

  totalProduct = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    totalProduct *= isNaN(nums[i + 1]) ? 1 : nums[i + 1];
    post.push(totalProduct);
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = pre[i] * post[nums.length - i - 1];
  }

  return nums;
};
