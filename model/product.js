var util = require("util");
var database = require('../utils/database.js');
template = "<div class=\"card\" style=\"width: 18rem;\">\n" +
    "  <img class=\"card-img-top\" src=\"%s\" alt=\"Card image cap\">\n" +
    "  <div class=\"card-body\">\n" +
    "    <h5 class=\"card-title\">%s</h5>\n" +
    "    <p class=\"card-text\">%s</p>\n" +
    "    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n" +
    "  </div>\n" +
    "</div>";
var Product = {};
Product.getProductView = function(name,desc,img)
{
    return util.format(template,name,desc,img);
};
Product.getProduct = async function(callback)
{
   database.execQuery("SELECT p.\"Name\",p.\"Description\",p.img FROM public.\"PRODUCT\" p",[], function (err, rows) {
       if(!err) {
           callback(null,rows);
       }else{
           callback(true,err);
       }
   })

};
module.exports = Product;
