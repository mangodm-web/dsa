const solution = function (isBadVersion) {
  return function (n) {
    let min = null;
    let left = 1;
    let right = n;

    while (left <= right) {
      const mid = Math.ceil((left + right) / 2);

      if (isBadVersion(mid)) {
        min = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
      
    return min;
  };
};
