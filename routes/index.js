var express = require('express');
var router = express.Router();
// Require mysql2
const mysql = require('mysql2');
// Require models
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
