var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('../db/knex');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login.nunjucks', { title: 'CodeGuild' });
});

router.post('/', function (req, res, next) {
    knex('users').select().where('username', req.body.username ).then(function (user) {
        if (user.length !== 0) {
            var hash = bcrypt.hashSync(req.body.password, 8);
            if (bcrypt.compareSync(req.body.password, user[0].password)) {
                req.session.user = user[0].id;
                console.log('password matched!')
                res.redirect('/users');
            } else {
              res.render('login.nunjucks', { error: "Email/password don't match" });
              console.log('passwords do not match yo')
            }
        } else {
          res.render('login.nunjucks', { error: "Email/password don't match" });
          console.log('username not found yo')
          }
    })
});
module.exports = router;
