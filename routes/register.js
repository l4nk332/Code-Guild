var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('../db/knex');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('register.nunjucks', { title: 'CodeGuild' });
  console.log('res is:' + res.body)
  console.log('req is:' + req)
});

router.post('/', function (req, res) {
  console.log('req body is: ' + req.body.newEmail)
  var hash = bcrypt.hashSync(req.body.newPassword, 8); //we use bcrypt to convert password into hash
  console.log('hash is: ' + hash)
  knex('users').select().where( 'username', '=', req.body.newUsername ).then(function(results) {
    console.log(results.length)
    if (results) {
      knex('users').insert({ username: req.body.newUsername , password: hash }).returning('id').then(function (user){
          console.log('login matched and a success! User id is: ' + user);
          req.session.user = user;
          // res.redirect('/user/' + user);')
      })
    } else {
      console.log('username already exists yo!')
      res.render('register.nunjucks', { error: 'username already exists, please try another' });
    }
  })


});

module.exports = router;
