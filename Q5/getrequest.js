const request = require('request');
var assert = require('assert');
var baseUrl = 'https://jsonplaceholder.typicode.com/posts/1';

var get = function(body, cb) {	
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
			cb(null, resObj);
		} else {
			console.log('Error while executing ---------------------------', error);
			cb(error, null);
		}
	});	
}

exports.get = get;