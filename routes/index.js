var express = require('express');
var router = express.Router();
var data = require('../lib/data');

var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  res.json(data);
});

router.get('/active_users', function(req, res, next) {
  res.json(data);
});

module.exports = router;
