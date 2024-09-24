import { Product } from "./products";

export class Cart {
  private _products: Product[] = [];
  private _total: number = 0;

  get products() {
    return this._products;
  }

  get total() {
    return this._total;
  }

  addToCart(product: Product) {
    this._total += product.price;
    this._products.push(product);
    this.updateCartDisplay(); // Atualiza a exibição do carrinho
  }

  getItems() {
    return this._products;
  }

  updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cart-items");
    if (cartItemsContainer) {
      cartItemsContainer.innerHTML = ""; // Limpa a lista atual

      this.products.forEach((product) => {
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
          <span id="names-styles">${product.name}</span>
          <span id="p-price">$ ${product.price}</span>
        `;

        cartItemsContainer.appendChild(itemElement);
      });

      const totalPrice = document.createElement("div");
      totalPrice.className = "total-price";
      totalPrice.innerHTML = `<span>order total</span>
      <span id="price-total">$ ${this._total}</span> `;

      const completeOrderBtn = document.createElement("div");
      completeOrderBtn.className = "order-btn";
      completeOrderBtn.innerHTML = "<span>Confirm Order</span>";

      cartItemsContainer.appendChild(totalPrice);
      cartItemsContainer.appendChild(completeOrderBtn);
    }
  }
}
