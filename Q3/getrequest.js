const request = require('request');
var assert = require('assert');
var baseUrl = 'https://jsonplaceholder.typicode.com/posts/1';
try {
request({
	headers: {
		'content-type': 'application/json'
	},
	url: baseUrl,
	method: 'GET'
}, function(error, result, response) {
	if (!error) {
		console.log('1 ---------------------------', result.statusCode);
		assert.strictEqual(result.statusCode, 200);
		var resObj = JSON.parse(response);
		console.log('2 ---------------------------', resObj.userId);
		assert.strictEqual(resObj.userId, 1);
	} else {
		console.log('Error while executing ---------------------------', error);
	}	
});
}
catch (e) {
		console.log(e);
	}