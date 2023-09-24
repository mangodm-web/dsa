/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    const seenNumbers = new Set();

    for (const num of nums) {
        if (seenNumbers.has(num)) {
            return true;
        }

        seenNumbers.add(num);
    }

    return false;
};
