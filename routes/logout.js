var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  if (!req.session.username) {
    res.redirect(`/login`);
  } else {
    knex("users").where({"username": req.session.username}).update({available: false})
    .then(function() {
      req.session = null;
      res.redirect(`/login`);
    })
    .catch(function(err) {
      console.log(`There was an error logging out a user`);
    });
  }
});

module.exports = router;
