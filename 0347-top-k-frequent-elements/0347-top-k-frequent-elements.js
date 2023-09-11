/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
  const counter = {};
  const result = [];
  
  for (const num of nums) {
    counter[num] = (counter[num] || 0) + 1;
  }
    
  const sortedCounter = Object.entries(counter).sort((a, b) => b[1] - a[1]);
  
  for (let i = 0; i < k; i++) {
    result.push(parseInt(sortedCounter[i][0]));
  }
  
  return result;
};
