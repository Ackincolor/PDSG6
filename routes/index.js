var express = require('express');
var router = express.Router();


/* GET home page. */

router.get('/' , function(req,res,next) {
    sess = res.session;
    if(sess.user.name) {
        res.render('index', {title: 'PhyGIT Accueil', user: sess.user});
    }else{
        res.render('index', {title:'PhyGIT Accueil',user:null})
    }

});
router.get('/register', function(req,res,next) {
    res.render('register', {title: 'PhyGIT Register',user:{}});
})
router.post('/register', function(req,res,next) {
    console.log(req.body.name);
    res.redirect('/users/login');
})

module.exports = router;
