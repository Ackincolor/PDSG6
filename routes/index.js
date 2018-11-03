var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/product', function(req, res, next) {
  var user = {
    name : "testUser",
    photo: "http://sdfqslkfdjhskjdf",
  }
  res.render('product', { title: 'Express' , user : user});
});
router.get('/' , function(req,res,next) {
    var user = {
        name : "testUserIndex",
        photo: "http://sdfqslkfdjhskjdf",
    }
  res.render('index', { title: 'PhyGIT Accueil',user : user});
})

module.exports = router;
