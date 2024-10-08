class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `ID do produto: ${this.id}, Nome: ${this.name}, Preço: ${this.price}`
  }
}

function createProduct(id, name, price) {
  return new Product(id, name, price);
}

const productPrice = 1490.99

module.exports =  {
  createProduct,
  Product,
  productPrice,
};