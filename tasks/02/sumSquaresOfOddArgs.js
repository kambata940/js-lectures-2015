function sumSquaresOfOddArgs() {
  return [].filter.call(arguments, function (el) {
    return el % 2 === 1;
  }).reduce(function (memo, el) {
    return memo + el * el;
  }, 0);
}

console.log(sumSquaresOfOddArgs(1,2,3,4,5,6));
