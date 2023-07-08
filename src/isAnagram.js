/*

  Valid Anagram (https://leetcode.com/problems/valid-anagram/)
  : Given two strings s and t, return true if t is an anagram of s, and false otherwise.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  (e.g. 1)
  Input: s = "anagram", t = "nagaram"
  Output: true

  (e.g. 2)
  Input: s = "rat", t = "car"
  Output: false

  (constraints)
  1 <= s.length, t.length <= 5 * 10**4
  s, t consist of lowercase English letters.
  */

function isAnagram(s, t) {
  if (typeof s !== "string" || typeof t !== "string") {
    throw new TypeError("input s and t should be string");
  }
  if (
    s.length < 1 ||
    s.length > 5 * Math.pow(10, 4) ||
    t.length < 1 ||
    t.length > 5 * Math.pow(10, 4)
  ) {
    throw new RangeError(
      "invalid input length: 1 <= s.length, t.length <= 5 * 10**4"
    );
  }

  const countMap = {};

  if (s.length !== t.length) {
    return false;
  }

  for (const letter of s) {
    if (letter in countMap) {
      countMap[letter]++;
    } else {
      countMap[letter] = 1;
    }
  }

  for (const letter of t) {
    if (!(letter in countMap)) {
      return false;
    }

    countMap[letter]--;
  }

  return true;
}

module.exports = isAnagram;
