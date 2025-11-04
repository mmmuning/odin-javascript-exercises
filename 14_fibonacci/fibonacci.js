const fibonacci = function (num) {
  let fibonacciSequence = [0, 1];

  if (isNaN(num) || num < 0) return "OOPS";

  for (let i = 2; i <= num; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }

  return fibonacciSequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
