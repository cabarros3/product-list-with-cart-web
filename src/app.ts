// importar os dados
import data from "../data.json"; // não usou chaves pq é dado bruto e não exporta nada
// importar a entidade product.ts
import { Product } from "./entities/products";

// criar os objetos usando os dados
for (let i = 0; i < data.length; i++) {
  const nome = data[i].name;
  const category = data[i].category;
  const price = data[i].price;
  const imageUrl = data[i].image.desktop;
  const product = new Product(nome, category, price, imageUrl);

  product.renderProducts();
}
