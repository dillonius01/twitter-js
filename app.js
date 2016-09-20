var express = require('express');
var morgan = require('morgan');
var nunjucks = require('nunjucks');

var app = express(); // creates instance of express application
app.use(morgan('combined'));
app.engine('html', nunjucks.render); // when giving html to res.render, tells it to use nunjucks

nunjucks.configure('views', { noCache: true }); // points nunjucks to dir with all templates
app.set('view engine', 'html'); // tells res.render to work with html files

// Logging for every request
// app.use('/', function(req, res, next) {
// 	console.log(req.path + req.method);
// 	next();
// })

app.get('/people', function(req, res, next) {
	res.render('index', {'title': 'Test Title', 'people': [{'name': 'Dillon'}, {'name': 'Jake'}]});
})


app.get('/', function(req, res, next) {
	res.send('Hello World');
})


app.listen(3000);
