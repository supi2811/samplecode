var supertest = require("supertest");
var should = require("should");
var Mocha = require("mocha");
var mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: 'customReportFilename',
    quiet: true
  }
});

// This agent refers to PORT where program is runninng.
var server = supertest.agent("https://jsonplaceholder.typicode.com");

// Test cases starts here
describe("Test Cases for testing GET and POST call in Testing framework", function() {
	// Test case for get call
	 this.timeout(15000);
	it("Test Case for get call ", function(done) {
		// calling Get API
		server.get("/posts/1").expect(200).end(function(err, res) {
			// HTTP status should be 200
			res.status.should.equal(200);
			// Error key should be false.
			//res.body.error.should.equal(false);
			done();
		});
	});
	// Test case for post call
	var body = {
		"title": "foo",
		"body": "bar",
		"userId": 1,
		"id": 101
	}
	it("Test Case for get call", function(done) {
		// calling POST API
		server.post("/posts").send(body).expect(201).end(function(err, res) {
			// HTTP status should be 201
			res.status.should.equal(201);
			// Error key should be false.
			//res.body.error.should.equal(false);
			done();
		});
	});
});