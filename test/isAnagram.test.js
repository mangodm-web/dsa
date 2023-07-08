const isAnagram = require("../src/isAnagram");

it("should pass the base cases", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
  expect(isAnagram("rat", "car")).toBe(false);
  expect(isAnagram("aa bb", "b aba")).toBe(true);
});

it("should throw an error when the input is invalid", () => {
  expect(() => isAnagram(undefined, "1")).toThrow(
    "input s and t should be string"
  );
  expect(() => isAnagram({ name: "test" }, null)).toThrow(
    "input s and t should be string"
  );
  expect(() => isAnagram("", "abc")).toThrow(
    "invalid input length: 1 <= s.length, t.length <= 5 * 10**4"
  );
  expect(() => isAnagram("", "a".repeat(5 * Math.pow(10, 4)))).toThrow(
    "invalid input length: 1 <= s.length, t.length <= 5 * 10**4"
  );
});
