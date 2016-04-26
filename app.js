var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/patients', function(request, response) {
	var patients = ['Harms, David','Peeples, Trevor','Doyle, Josh'];
	response.json(patients);
});

module.exports = app;

// left off at 35.47 just finished making index.html and using express static