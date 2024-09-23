import { v4 as uuid4 } from "uuid";
//import { ShoppingCart } from "./shoppingCart";

export class Product {
  private _id: string = uuid4();
  private _name: string = "";
  private _category: string = "";
  private _price: number = 0;
  private _imageUrl: string = "";

  constructor(name: string, category: string, price: number, imageUrl: string) {
    (this._category = category),
      (this._price = price),
      (this._name = name),
      (this._imageUrl = imageUrl);
  }

  renderProducts() {
    // cria o container principal
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    // imagem
    const productImage = document.createElement("div");
    productImage.className = "product-image";
    productImage.innerHTML = `<img
                src="${this._imageUrl}"
                alt="${this._name}"
              />`;

    // botão add cart
    const addCartBtn = document.createElement("div");
    addCartBtn.className = "add-cart-btn";
    addCartBtn.innerHTML = `<div id="addToCart" class="add-cart-icon">
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
              </div>
              <span>Add to Cart</span>`;

    // informações
    const productInfo = document.createElement("div");
    productInfo.className = "product-information";

    // categoria
    const productCat = document.createElement("div");
    productCat.className = "product-category";
    productCat.innerHTML = `<span>${this._category}</span>`;

    // nome do produto
    const productName = document.createElement("div");
    productName.className = "product-name";
    productName.innerHTML = `<span>${this._name}</span>`;

    // preço do produto
    const productPrice = document.createElement("div");
    productPrice.className = "product-price";
    productPrice.innerHTML = `<span>$ ${this._price}</span>`;

    // adiciona as informações a div de informações
    if (productInfo) {
      productInfo.appendChild(productCat);
      productInfo.appendChild(productName);
      productInfo.appendChild(productPrice);
    }

    // pega o container principal e adiciona o cards
    const cards = document.getElementById("cards");
    if (cards) {
      cards.appendChild(productCard);
    }

    // adiciona os 3 componentes do card ao card
    productCard.append(productImage, addCartBtn, productInfo);
  }

  //   remove() {
  //     console.log("olá");
  //   }
}

// const produto = new Product(20, "comida","pizza", "dvgfslghjrf");
// console.log(produto.add());
