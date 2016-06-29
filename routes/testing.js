var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('profile.nunjucks', { title: 'Code Guild' });
  // res.render('testing.nunjucks', { title: 'Code Guild' });
});

module.exports = router;
