module.exports = function(_arguments){

	var result = ''

	for (var i=0; i<_arguments.length; i++) {

		var stringified
		  , arg = _arguments[i]

		switch(true) {

			case typeof(arg) == 'object':

				stringified = JSON.stringify(arg);

			break;

			default:
			
				stringified = arg;

			break;

		}

		result = result + stringified;

	};

	return result;

}