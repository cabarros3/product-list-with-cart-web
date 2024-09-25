// importar os dados
// importar a entidade product.t
import { Product } from "./entities/products";
import data from "../data_with_ids.json"; // data é variável. Não utiliza a chave porque aqui é um dado bruto
import { Cart } from "./entities/cart";

const cart = new Cart();

for (let i = 0; i < data.length; i++) {
  const produto = new Product(
    data[i].id,
    data[i].name,
    data[i].category,
    data[i].price,
    data[i].image.desktop
  );
  produto.renderProducts(cart);
}
