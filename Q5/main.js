var getreq = require('./getrequest');
var postreq = require('./postrequest');
var reqbody = '';
postreq.post(reqbody, function(err, postresponse) {
	if (err) {
		console.log('---****Error in post Call*****-------')
	} else {
		console.log('---****Successfully executed post Call*****-------')
	}
});
getreq.get(reqbody, function(err, getresponse) {
	if (err) {
		console.log('---****Error in get Call*****-------')
	} else {
		console.log('---****Successfully executed get Cal*****-------')
	}
});