var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.username) {
    res.redirect(`/users/${req.session.username}`);
  }
  res.render('index.nunjucks', { title: 'CodeGuild' });
});

module.exports = router;
