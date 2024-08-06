const createProduct = require("./product");

const product = createProduct(1, "Notebook", 1999.99);

console.log(product.getInfo());