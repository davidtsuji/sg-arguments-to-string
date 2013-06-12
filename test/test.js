require('sgArgumentsToString');

test('sg.argumentsToString() test', function() {

	;(function(){

		ok(sg.argumentsToString(arguments) === '{"0":1,"1":true,"2":[1,true,[1,2,3]],"3":{"a":"a","b":{"a":"a","b":"b"}}}', 'Mixture of types');
		
	})(1, true, [1, true, [1,2,3]], { a:'a', b:{ a:'a', b:'b' } });

	;(function(){

		ok(sg.argumentsToString(arguments) === '{}', 'No arguments');
		
	})();

	;(function(){

		ok(sg.argumentsToString(arguments) === '{"0":null}', 'Null, Undefined');
		
	})(null, undefined);

});