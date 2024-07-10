const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, curr) => {
    if (!acc) return curr;
    return acc * curr;
  }, 0);
};

const power = function (base, power) {
  return base ** power;
};

const factorial = function (num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
