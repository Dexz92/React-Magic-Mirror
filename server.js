const express = require('express');
const app = express();
let axios = require('axios');
var parseString = require('xml2js').parseString;

/*
* Initial endpoint test
*/
app.get('/api/hello', function(req,res) {
	res.json({message: "Hello from the other side!"})
})

  /*
    * Finds all departures from a specified stop
	* TODO ADD PARAMETERS
    */
app.get('/api/departures', function(req,res) {
	axios.get('http://www.labs.skanetrafiken.se/v2.2/stationresults.asp?selPointFrKey=81249')
	.then(response => {
		parseString(response.data, function(error, result){
			let lines = result['soap:Envelope']['soap:Body'][0]['GetDepartureArrivalResponse'][0]['GetDepartureArrivalResult'][0]['Lines'][0].Line;
			lines.map(function(obj) {
				console.log(obj);
			})
			//res.json({message: ADD HERE});
		})
	})
	.catch(error => {
		console.log(error);
	})
})

const port = process.env.PORT || 3001;

app.listen(port, function() {
	console.log('server listening on port: ' + port)
})