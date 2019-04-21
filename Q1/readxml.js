var fs = require('fs');
var parseString = require('xml2js').parseString;
var js2xmlparser = require("js2xmlparser");
// Read Old XML file
fs.readFile('old.xml', function(err, oldxmldata) {
	if (err) {
		callback(err, null);
	} else {
		// Converting xml data into javascript object
		parseString(oldxmldata, function(err, olddata) {
			if (err) {
				callback(err, null);
			} else {
				// Modifying value of comapany name
				olddata.Data.CompanayDetails[0].Name[0] = "Wipro LTD";
				var newxml = js2xmlparser.parse("NewXMLData", olddata);
				// writing new data into new file
				fs.writeFile('new.xml', newxml, function(err, data) {
					if (err) {
						console.log(err)
					} else {
						console.log("********---created new xml file with company name---***************");
					}
				})
			}
		})
	}
});