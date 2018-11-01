require("../Utils/utils");
template = "<div class=\"card\" style=\"width: 18rem;\">\n" +
    "  <img class=\"card-img-top\" src=\"${img}\" alt=\"Card image cap\">\n" +
    "  <div class=\"card-body\">\n" +
    "    <h5 class=\"card-title\">${name}</h5>\n" +
    "    <p class=\"card-text\">${desc}</p>\n" +
    "    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n" +
    "  </div>\n" +
    "</div>";
class Product {
    function getProductView(name,desc,img)
    {
        return template.format(name,desc,img);
    }
}
