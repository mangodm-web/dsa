/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function(nums1, nums2) {
    const nums1Only = [];
    const nums2Only = [];
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    for (const element of set1) {
        if (!set2.has(element)) {
            nums1Only.push(element);
        }
    }
    for (const element of set2) {
        if (!set1.has(element)) {
            nums2Only.push(element);
        }
    }
    
    return [nums1Only, nums2Only];
};