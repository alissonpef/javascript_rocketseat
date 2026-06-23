function createProduct(name) {
  const product = {};

  product.name = name;
  product.datails = function () {
    console.log(`O nome do produto é ${this.name}`);
  };

  return product;
}

const product1 = new createProduct("Teclado");
console.log(product1);
product1.datails();

const product2 = new createProduct("Mouse");
console.log(product2);
product2.datails();
