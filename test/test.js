var argsToString = require('sg-arguments-to-string');

test('argsToString() test', function() {

	;(function(){

		ok(argsToString(arguments) === '{"0":1,"1":true,"2":[1,true,[1,2,3]],"3":{"a":"a","b":{"a":"a","b":"b"}}}', 'Mixture of types');
		
	})(1, true, [1, true, [1,2,3]], { a:'a', b:{ a:'a', b:'b' } });

	;(function(){

		ok(argsToString(arguments) === '{}', 'No arguments');
		
	})();

	;(function(){

		ok(argsToString(arguments) === '{"0":null}');
		
	})(null, undefined);

});