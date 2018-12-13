var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/abc', function(req, res, next) {
    res.render('index', { title: 'Express abc ' });
    var xhr=new XMLHttpRequest();
    let x=xhr.send("https://www.baidu.com/")
    console.info(x);
});
module.exports = router;
