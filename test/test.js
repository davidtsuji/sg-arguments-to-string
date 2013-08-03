var argsToString = require('sgArgumentsToString');

test('argsToString() test', function() {

	;(function(){

		ok(argsToString(arguments) === '1true[1,true,[1,2,3]]{"a":"a","b":{"a":"a","b":"b"}}', 'Mixture of types');
		
	})(1, true, [1, true, [1,2,3]], { a:'a', b:{ a:'a', b:'b' } });

	;(function(){

		ok(argsToString(arguments) === '', 'No arguments');
		
	})();

	;(function(){

		ok(argsToString(arguments) === 'nullundefined');
		
	})(null, undefined);

});