var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/abc', function(req, res, next) {
  res.render('index', { title: 'wo yao fuck you' });
});

module.exports = router;
