module.exports = function(_arguments){

	var argumentsStringified = ''

	try {
		argumentsStringified = JSON.stringify(_arguments);
	} catch(e) {
		argumentsStringified = Math.random().toString(35).substring(2, 12);
	}

	return argumentsStringified;

}