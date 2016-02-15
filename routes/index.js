var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET home page. */
router.get('/account', function(req, res) {	
  res.render('account', { title: 'Hello!' });
});


module.exports = router;