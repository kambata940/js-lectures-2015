module.exports = fib;

fib.results = [1,1];
function fib(n) {
  if(n < 0) { return NaN }

  if (!fib.results[n]) {
    fib.results[n] = fib(n - 1) + fib(n - 2);
  }

  return fib.results[n];
}
