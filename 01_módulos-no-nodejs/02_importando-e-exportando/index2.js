const {createProduct, Product, productPrice} = require("./product2");

const product = createProduct(1, "Notebook", 1999.99);

const product2 = new Product(2, "Iphone", productPrice);

console.log(product.getInfo());

console.log(product2.getInfo());