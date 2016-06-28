var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:username', function(req, res, next) {
  if (req.session.username === req.params.username) {
    res.render('users.nunjucks', { title: 'Code Guild' });
  } else {
    res.redirect('/login')
  }
});

module.exports = router;
