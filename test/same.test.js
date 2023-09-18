const same = require("../src/same");

it("should pass the base cases", () => {
  expect(same([1, 2, 3], [1, 4, 9])).toBe(true);
  expect(same([1, 2, 3], [1, 4, 8])).toBe(false);
  expect(same([1, 2, 3], [1])).toBe(false);
});

it("should throw an error when the input is invalid", () => {
  expect(() => same([1, 2], 3)).toThrow(TypeError);
  expect(() => same([], undefined)).toThrow(TypeError);
});
