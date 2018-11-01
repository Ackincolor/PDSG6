var util = require("util");
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
module.exports = Product;
