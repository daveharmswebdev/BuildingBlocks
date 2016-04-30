var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/tempaltes');

var bodyParser = require('body-parser');
var urlencode = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

var patients = {
	'Harms': 'headache',
	'Peeples': 'crabs',
	'Doyle': 'syphillus'
}
	;

app.get('/patients', function(request, response) {
	response.json(Object.keys(patients));
});

app.post('/patients', urlencode, function(request, response) {
	var newPatient = request.body;
	patients[newPatient.name] = newPatient.description;
	response.status(201).json(newPatient.name);
});

module.exports = app;

// left off at 52.47 employed body parser.