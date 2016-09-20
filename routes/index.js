var express = require('express');
var router = express.Router();

var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list(); // why use cloneDeep here?
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
	var name = req.params.name;
	var list = tweetBank.find( {name: name});
	res.render('index', {tweets: list, showForm: true, name: name });
});

router.get('/users/:name/:id', function(req, res) {
  var id = req.params.id;
  var name = req.params.name;
  var list = tweetBank.find( {name: name, id: id});
  res.render('index', {tweets: list, showForm: true, name: name });
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect(req.headers.referer);
});


// router.get('/stylesheets/:name', function(req, res, next) { //:name parameterizes 'name'

// 	var options = {
// 		root: __dirname + '/../public/stylesheets/'
// 	}

// 	console.log(req.params); // in path after base url
// 	console.log(req.query); // after ? (after path)
// 	var fileName = req.params.name;
// 	res.sendFile(fileName, options, function(err) {
// 		if (err) {
// 			console.log(err);
// 			res.status(err.status).end();
// 		}
// 		else {
// 			console.log('Sent:' + fileName);
// 		}
// 	})
// });


module.exports = router;
