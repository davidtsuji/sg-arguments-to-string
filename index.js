var _ = require('underscore')

window.sg = window['sg'] || {};

window.sg.argumentsToString = function(){

	var result = ''

	_.each(arguments, function(_argument){

		var stringified

		switch(true) {

			case typeof(_argument) == 'object':

				stringified = JSON.stringify(_argument);

			break;

			default:
			
				stringified = _argument;

			break;

		}

		result = result + stringified;

	});

	return result;

}