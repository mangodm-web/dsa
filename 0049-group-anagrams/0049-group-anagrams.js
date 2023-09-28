/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const anagramMap = new Map();
  const result = [];

  for (const str of strs) {
    const key = [...str].sort().join("");
    anagramMap[key] = anagramMap[key] ? [...anagramMap[key], str] : [str];
  }

  for (const value of Object.values(anagramMap)) {
    result.push(value);
  }

  return result;  
};
