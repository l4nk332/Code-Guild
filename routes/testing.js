var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.render('testing.nunjucks', { sessionUsers: req.body.sessionUsers });
});

module.exports = router;
