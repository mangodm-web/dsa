const MinStack = function () {
  this.stack = [];
  this.length = 0;
  this.minIndex = undefined;
  this.minValue = undefined;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.length++;

  for (let i = 0; i < this.length; i++) {
    if (this.minValue === undefined || this.stack[i] < this.minValue) {
      this.minValue = this.stack[i];
      this.minIndex = i;
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.length--;
  this.minIndex = undefined;
  this.minValue = undefined;

  for (let i = 0; i < this.length; i++) {
    if (this.minValue === undefined || this.stack[i] < this.minValue) {
      this.minValue = this.stack[i];
      this.minIndex = i;
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minValue;
};
