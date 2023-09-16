/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    const toFound = target - numbers[i];
    let pointer = i + 1;

    while (pointer < numbers.length) {
      if (numbers[pointer] === toFound) {
        return [i + 1, pointer + 1];
      }
      if (numbers[pointer] > toFound) {
        break;
      }

      pointer++;
    }
  }
};
