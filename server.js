const express = require('express');
const app = express();


app.get('/api/hello', function(req,res) {
	res.json({message: "It works!"});
})

const port = process.env.PORT || 3001;

app.listen(port, function() {
	console.log('server listening on port: ' + port)
})