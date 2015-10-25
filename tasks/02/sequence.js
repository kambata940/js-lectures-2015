function sequence() {
  var functions = arguments;

  return function (target) {
    console.log(functions);
    return [].reduce.call(functions, function (accum, func) {
      return func(accum);
    }, target);
  }
}

var result = sequence(parseFloat, Math.round)
console.log(result(66.6));
