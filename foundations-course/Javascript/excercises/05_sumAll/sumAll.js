const sumAll = function (firstNum, secondNum) {
  if (
    firstNum < 0 ||
    secondNum < 0 ||
    !Number.isInteger(firstNum) ||
    !Number.isInteger(secondNum)
  )
    return "ERROR";
  let [min, max] = [firstNum, secondNum].sort((a, b) => a - b);
  let summedNumbers = 0;
  for (let i = min; i <= max; i++) {
    summedNumbers += i;
  }
  return summedNumbers;
};

// Do not edit below this line
module.exports = sumAll;
