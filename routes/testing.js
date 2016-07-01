var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:uniqueRoomName', function(req, res, next) {
  res.render('testing.nunjucks', { uniqueRoomName: req.params.uniqueRoomName });
});

module.exports = router;
