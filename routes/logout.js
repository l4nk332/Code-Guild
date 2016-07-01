var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  if (!req.session.username) {
    res.redirect(`/login`);
  } else {
    req.session = null;
    res.redirect(`/login`);
  }
});

module.exports = router;
