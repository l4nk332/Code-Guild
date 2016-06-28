var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('../db/knex');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('register.nunjucks', { title: 'CodeGuild' });
});

router.post('/', function (req, res) {
  var hash = bcrypt.hashSync(req.body.newPassword, 8); //we use bcrypt to convert password into hash

  knex('users').select().where( 'username', '=', req.body.newUsername ).then(function(results) {
    console.log('results are: ' + results)
    console.log('results.length is: ' + results.length)
    if (results.length === 0) {
      knex('users').insert({ username: req.body.newUsername , password: hash, email: req.body.newEmail }).returning('id').then(function (user){
          req.session.user = user;
          res.redirect('/users');
      })
    } else {
      res.render('register.nunjucks', { error: 'Username already exists, please try again' });
    }
  })


});

module.exports = router;
