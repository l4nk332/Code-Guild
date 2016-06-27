var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login.nunjucks', { title: 'CodeGuild' });
});
router.post('/', (req, res, next) => {
    knex('users').select().where( 'username', req.body.username ).then((user) => {
        if (user) {
          console.log('user is: ' + user)
            var hash = bcrypt.hashSync(req.body.password, 8)
            if (bcrypt.compareSync(req.body.password, user[0].user_password)) {
                req.session.user = user[0].user_id;
                res.redirect('/user');
            } else {
              // res.render('signin', error: "Email/password don't match");
              console.log('passwords do not match yo')
            }
        } else {
          // res.render('signin', error: "Email/password don't match");
          console.log('username not found yo')
          }
        res.redirect('/');
    })
});
module.exports = router;
