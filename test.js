// basic test format for supertest
var request = require('supertest');
var app = require('./app');

describe('Requests to the root path', function() {

	it('Returns a 200 status code', function(done) {

		request(app)
			.get('/')
			.expect(200, done);

	});

	it('Returns a HTML format', function(done) {
		request(app)
			.get('/')
			.expect('Content-Type', /html/, done);
	});

	it('Returns an index file with patients', function(done) {
		request(app)
			.get('/')
			.expect(/patients/i, done);
	});

});

describe('Listing patients on /patients', function() {

	it('Returns 200 status code', function(done) {

		request(app)
			.get('/patients')
			.expect(200, done);

	});

	it('Returns JSON format', function(done) {

		request(app)
			.get('/patients')
			.expect('Content-Type', /json/, done);

	});

	it('Returns initial patients', function(done) {

		request(app)
			.get('/patients')
			.expect(JSON.stringify(['Harms, David','Peeples, Trevor','Doyle, Josh']), done);

	});
	
});


// describe('', function() {

// 	it('', function(done) {

// 	});

// });

// finished at 23:00 about to write second test.

