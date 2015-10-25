function reverseWordsOrderInString (string) {
	return string.split(' ').reduce(
		function(accum, word) {
	  		return word + ' ' + accum;
		},
		'').trim();
}
var result = reverseWordsOrderInString('Foo bar baz');
var expectation = 'baz bar Foo'
console.log(result, 'should be: ', expectation);
console.log(result === expectation);
