//Módulo incompativel com ES Modules
import lodash from 'lodash';
const { filter } = lodash;

//Módulo nativo do node
import path from 'path';

// const {createProduct, Product, productPrice} = require("./product2");
import { createProduct, Product, productPrice } from './product.js';

const product = createProduct(1, 'Notebook', 1999.99);

const product2 = new Product(2, 'Iphone', productPrice);

console.log(product.getInfo());

console.log(product2.getInfo());
