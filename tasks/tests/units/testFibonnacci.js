var fibonnacci = require('../fibonnacci');

module.exports = {
  testFibonnacci:
    func: fibonnacci
    params: [-1, 0 , 4];
    expectations: [isNaN, _isEqual(1), _isEqual(5)];
}

// TESTS
function _isEqual(a) {
  return function(b) {
    return a === b;
  }
}
