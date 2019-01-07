/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (input, keyValue) => {
	// Write your code here
	let objVal = null;
	if (Array.isArray(input)) {

	}
	if (input.length > 0 && keyValue) {
		objVal = {};
		for (arrValue of input) {
			objVal[arrValue[keyValue]] = arrValue;
		}
	}
	return objVal;
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
