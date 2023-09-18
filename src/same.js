/*
 Write a function called same, which accepts two arrays. 
 The function should return true if every value in the array has its corresponding value squared in the second array. 
 The frequency of values must be the same. 
 */

function same(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError("every input should be an array.");
  }
  if (arr1.length !== arr2.length) {
    return false;
  }

  const freq1Map = {};
  const freq2Map = {};

  for (let i = 0; i < arr1.length; i++) {
    freq1Map[arr1[i]] = (freq1Map[arr1[i]] || 0) + 1;
    freq2Map[arr2[i]] = (freq2Map[arr2[i]] || 0) + 1;
  }

  for (const key in freq1Map) {
    const squaredValue = parseInt(key) ** 2;

    if (
      !(squaredValue in freq2Map) ||
      freq1Map[key] !== freq2Map[squaredValue]
    ) {
      return false;
    }
  }

  return true;
}

module.exports = same;
