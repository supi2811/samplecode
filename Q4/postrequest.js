const request = require('request');
var assert = require('assert');
var baseUrl = 'https://jsonplaceholder.typicode.com/posts';
var body = {
	"title": "foo",
	"body": "bar",
	"userId": 1,
	"id": 101
}
var reqbody = JSON.stringify(body);
request({
	headers: {
		'content-type': 'application/json'
	},
	url: baseUrl,
	method: 'POST',
	body: reqbody
}, function(error, result, response) {
	if (!error) {
		console.log('1 ---------------------------', result.statusCode);
		assert.strictEqual(result.statusCode, 201);
		var resObj = JSON.parse(response);
		console.log('2 ---------------------------', resObj.userId);
		assert.strictEqual(resObj.userId, 1);
	} else {
		console.log('Error while executing ---------------------------', error);
	}
});