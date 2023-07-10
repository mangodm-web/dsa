function groupAnagrams(strs) {
  const hash = {};
  const result = [];

  for (const str of strs) {
    const key = str.split("").sort().join("");

    if (key in hash) {
      hash[key] = [...hash[key], str];
    } else {
      hash[key] = [str];
    }
  }

  for (const [_, value] of Object.entries(hash)) {
    result.push(value);
  }

  return result;
}

module.exports = groupAnagrams;
