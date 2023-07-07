const containsDuplicate = require("../src/containsDuplicate");

it("should pass the base cases", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});

it("should throw an error when the input is invalid", () => {
  expect(() => containsDuplicate("abc")).toThrow("input should be an array");
  expect(() => containsDuplicate([])).toThrow("invalid input array length");
});
