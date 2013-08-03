var argsToString = require('sg-arguments-to-string')

test('argsToString() test', function() {

	;(function(){

		ok(argsToString.apply(this, arguments) === '1true[1,true,[1,2,3]]{"a":"a","b":{"a":"a","b":"b"}}', 'Mixture of types');
		
	})(1, true, [1, true, [1,2,3]], { a:'a', b:{ a:'a', b:'b' } });

	;(function(){

		ok(argsToString.apply(this, arguments) === '', 'No arguments');
		
	})();

	;(function(){

		ok(argsToString.apply(this, arguments) === 'nullundefined', 'null + undefined');
		
	})(null, undefined);

	;(function(){

		ok(argsToString.apply(this, arguments) === '/.+/function Boolean() { [native code] }function Date() { [native code] }');
		
	})(/.+/, Boolean, Date);

});