var type = require('type');

module.exports = function(){

	var argumentsStringified = ''

	for (var i=0; i<arguments.length; i++) {

		if (type(arguments[i]) == 'function' || type(arguments[i]) == 'regexp') {

			argumentsStringified = argumentsStringified + arguments[i].toString();

		} else {

			argumentsStringified = argumentsStringified + JSON.stringify(arguments[i])

		}

	}

	return argumentsStringified;

}