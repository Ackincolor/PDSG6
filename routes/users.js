var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/product', function(req, res, next) {
    sess = req.session;
    if(sess.name) {
        res.render('product', {title: 'PDS', user: sess.user});
    }else {
        res.render('login', {title: 'PDS',user:{}});
    }
});
router.get('/login', function(req,res,next) {
  res.render('login',{title:'PDS',user:{}});
});
router.post('/login', function (req,res,next) {
  console.log(req.body.login);
  res.render('login',{title:'PDS',user:{}});
})

module.exports = router;
