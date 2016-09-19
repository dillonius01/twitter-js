var express = require('express');
var morgan = require('morgan');
var app = express(); // creates instance of express application
app.use(morgan('combined'));

// app.use('/', function(req, res, next) {
// 	console.log(req.path + req.method);
// 	next();
// })



app.get('/', function(req, res, next) {
	res.send('Hello World');
})


app.listen(3000);