import { v4 as uuid4 } from "uuid";
import { Cart } from "./cart";

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

  get price() {
    return this._price;
  }

  get name() {
    return this._name;
  }

  renderProducts(cart: Cart) {
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
    addCartBtn.innerHTML = `<div class="add-cart-icon">
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
              </div>
              <span>Add to Cart</span>`;

    let itemCount = 0;

    addCartBtn.addEventListener("click", () => {
      addCartBtn.classList.add("colorBtnIcons");
      if (itemCount === 0) {
        itemCount++;

        addCartBtn.innerHTML = `
            <div class="decrement-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></div>
            <span class="item-count">${itemCount}</span>
            <div class="increment-btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></div>
                    `;

        const decrementBtn = addCartBtn.querySelector(".decrement-btn");
        const incrementBtn = addCartBtn.querySelector(".increment-btn");

        if (incrementBtn) {
          incrementBtn.addEventListener("click", (event) => {
            itemCount++;
            const itemCountElement = addCartBtn.querySelector(".item-count");
            if (itemCountElement) {
              itemCountElement.innerHTML = `${itemCount}`;
            }
            // addCartBtn.querySelector(".item-count").innerText = itemCount;
          });
        }

        if (decrementBtn) {
          decrementBtn.addEventListener("click", (event) => {
            if (itemCount >= 0) {
              itemCount--;
              const itemCountElement = addCartBtn.querySelector(".item-count");
              if (itemCountElement) {
                itemCountElement.innerHTML = `${itemCount}`;
              }
              // addCartBtn.querySelector(".item-count").innerText = itemCount;
            }
          });
        }

        // Adiciona o produto ao carrinho
        cart.addToCart(this); // Adiciona a instância do produto ao carrinho
      }
    });

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
