var fs = require('fs');
// Read old JSON file
fs.readFile('old.json', 'utf-8', function(err, oldjsondata) {
	if (err) {
		callback(err, null);
	} else {
		// Converting JSON string into Javascript object
		var oldjsonobj = JSON.parse(oldjsondata);	
		// Modifying value of comapany name
		oldjsonobj.empDetails.companyname = "Wipro LTD";
		// Again Converting javascript object into JSON string so that we can write it into file system
		var newjsondata =  JSON.stringify(oldjsonobj)
		// writing new data into new file
		 fs.writeFile('new.json', newjsondata, function(err, data) {
			 if (err) {
				 callback(err, null);
			 } else {
				 console.log(
					 "********---created new json file with updated company name---***************");
			 }
		 })
	}
});