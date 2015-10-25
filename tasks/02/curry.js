function curry(func) {
  return function () {
    var outerArgs = [].slice.call(arguments, 0);

    if(outerArgs.length >= func.length) {
      return func.apply(null, outerArgs);
    }

    var mutatedFunc = function () {
      var args = [].slice.call(arguments, 0);

      allArgs = outerArgs.concat(args);
      return func.apply(null, allArgs);
    }

    return mutatedFunc;
  }
}

console.log(
  curry(function (a,b,c,d) {
  return a + b + c;
})(1,3,3)(22)
);
