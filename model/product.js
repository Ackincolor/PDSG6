var util = require("util");
var database = require('../utils/database.js');

class Product {
    constructor(name,desc,img)
    {
        this.name = name;
        this.desc = desc;
        this.img = img;
        this.template = "<div class=\"card col-sm\" style=\"width: 18rem;\">\n" +
            "  <img class=\"card-img-top\" src=\"%s\" alt=\"Card image cap\">\n" +
            "  <div class=\"card-body\">\n" +
            "    <h5 class=\"card-title\">%s</h5>\n" +
            "    <p class=\"card-text\">%s</p>\n" +
            "    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n" +
            "  </div>\n" +
            "</div>";
    }
    getProductView(name,desc,img)
    {
        return util.format(this.template,img,name,desc);
    };
    async getProduct (start,number,callback)
    {
        database.execQuery("SELECT p.\"Name\",p.\"Description\",p.img FROM public.\"PRODUCT\" p LIMIT $1 OFFSET $2;",[number,start], function (err, rows) {
            if(!err) {
                callback(null,rows);
            }else{
                callback(true,err);
            }
        })
    };
    async insert (values) {
        database.execQuery("INSERT INTO public.\"PRODUCT\" values()",values,function(err,rows) {
            if(err)
            {
                console.log(err);
            }
        })
    }
}
module.exports = Product;
