var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register.nunjucks', { title: 'CodeGuild' });
});

module.exports = router;