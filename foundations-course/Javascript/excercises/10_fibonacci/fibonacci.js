const fibonacci = function (num) {
  let count;
  count = parseFloat(num);
  if (count === 0) return 0;
  if (count < 0) return "OOPS";

  if (count <= 2) return 1;
  const fib = [0, 1];
  for (let i = 2; i <= count; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;
