var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/:sessionRoomName', function(req, res, next) {
  res.render('connect.nunjucks', { uniqueRoomId: req.params.sessionRoomName });
});

module.exports = router;
