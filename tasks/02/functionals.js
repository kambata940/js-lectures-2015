function cons(a, b) {
  return function (func) {
    return func(a, b);
  }
}

function car(cons) {
  return cons(function (a) {
    return a;
  })
}

function cdr(cons) {
  return cons(function (_, b) {
    return b;
  })
}

function forEach(list, func) {
  var head = car(list);
  var tail = cdr(list);

  func(head);

  if (typeof(tail) !== 'function' ) {
    return
  }
  forEach(cdr(list), func);
  return
}

function map(list, func) {
  if (typeof(list) !== 'function') {
    return func(list);
  }

  var image = func(car(list));
  return cons(image,
              map(cdr(list), func));
}

function filter(list, pred) {
  var isTrueForHead = pred(head);

  if(typeof(list) !== 'function') {
    if (isTrueForHead) {
      return list;
    }

    return;
  }

  var head = car(list);
  var tail = cdr(list);

  if (isTrueForHead) {
    return cons(head, filter(tail, pred));
  }

  return filter(tail, pred);
}

function reduce(list, func, startValue) {
  if (typeof(list) !== 'function') {
    return func(startValue, list)
  }

  var each = car(list);
  var tail = cdr(list);

  return reduce(tail, func, func(startValue, each));
}





// Test
var cons_result = cons(1,2)(function (a, b) {
  return a + b;
})
var car_result = car(cons(1, 2));

var list = cons(7, cons(8, 9));
var tail = cdr(list)

var log = console.log.bind(console);
var list = cons(1, cons(2, cons(3, cons(4, 5))));

var map_result = map(list, function (e) {
  return e + 22;
});

var list = cons(1, cons(2, cons(3, cons(4, 5))));
var filtered = filter(list, function (e) {
  return e % 2 === 0;
});

// forEach(filtered, log);

reduced = reduce(list, function (memo, each) {
  return memo + each;
}, 0);

console.log(reduced);
