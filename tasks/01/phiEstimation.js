var fib = require('./fibonnacci');

module.exports = function phiEstimation(n) {
  return fib(n) / fib(n-1);
}
