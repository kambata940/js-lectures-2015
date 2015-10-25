function compose() {
  var functions = [].slice.apply(null, arguments);

  return function (target) {
    console.log(functions);
    return [].reduce.call(functions, function (accum, func) {
      return func(accum);
    }, target).reverse();
  }
}

var result = compose(Math.round, parseFloat);
console.log(result(66.6));
