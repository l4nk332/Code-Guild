var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/:sessionRoomName', function(req, res, next) {
  if (req.session.username) {
    res.render('connect.nunjucks', { uniqueRoomId: req.params.sessionRoomName });
  } else {
    res.render('login.nunjucks', { title: 'CodeGuild' });
  }
});

module.exports = router;
