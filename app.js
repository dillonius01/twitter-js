var express = require('express');
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');

var app = express(); // creates instance of express application
app.use(morgan('combined'));
app.engine('html', nunjucks.render); // when giving html to res.render, tells it to use nunjucks

nunjucks.configure('views', { noCache: true }); // points nunjucks to dir with all templates
app.set('view engine', 'html'); // tells res.render to work with html files

//Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

//Routes
var routes = require('./routes');
app.use('/', routes);


app.listen(3000);
