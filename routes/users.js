var express = require('express');
var router = express.Router();
let {Client,Product} = require('../model/models.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/product', function(req, res, next) {
    let sess = req.session;
    let user = sess.user;
    if(user!== undefined) {
        res.render('product', {title: 'PDS', user: user});
    }else {
        res.redirect('/users/login');
    }
});
router.get('/login', function(req,res,next) {
    let session = req.session;
    res.render('login',{title:'PDS',user:req.session.user});
});
router.post('/login', function (req,res,next) {
    sess = req.session;
    sess.user = Client.getClient("bla");
    res.redirect('/users/');
})

module.exports = router;
