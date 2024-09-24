// importar os dados
import data from "../data.json"; // não usou chaves pq é dado bruto e não exporta nada
// importar a entidade product.ts
import { Product } from "./entities/products";
import { Cart } from "./entities/cart";

const cart = new Cart();

// criar os objetos usando os dados
for (let i = 0; i < data.length; i++) {
  const nome = data[i].name;
  const category = data[i].category;
  const price = data[i].price;
  const imageUrl = data[i].image.desktop;
  const product = new Product(nome, category, price, imageUrl);

  product.renderProducts(cart);
}

// const product1 = new Product("banana", "fruta", 4, "kladjfdkj");
// const product2 = new Product("maça", "fruta", 4, "kladjfdkj");

// const cart = new Cart();
// console.log(cart.addToCart(product1));
// console.log(cart.addToCart(product2));
// console.log(cart);
