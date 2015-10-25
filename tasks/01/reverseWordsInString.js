module.exports = reverseWordsInString;

function reverseWordsInString (string) {
  return string.split(' ').reduce(function (memo, word) {
    return memo + ' ' + word.split('').reverse().join('');
  },
  '').trim();
}

var result = reverseWordsInString('Foo bar baz');
var expectation = 'ooF rab zab'

console.log(result, 'should be: ', expectation);
console.log(result === expectation);
