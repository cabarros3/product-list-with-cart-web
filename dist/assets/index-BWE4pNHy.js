(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();class b{constructor(t,a,i,e,s,r=0){this._name="",this._category="",this._price=0,this._imageUrl="",this._quantity=0,this._id=t,this._category=i,this._price=e,this._name=a,this._imageUrl=s,this._quantity=r}get category(){return this._category}get imageUrl(){return this._imageUrl}get quantity(){return this._quantity}get price(){return this._price}get name(){return this._name}get id(){return this._id}incrementQuantity(){this._quantity++}decrementQuantity(){this._quantity--}renderProducts(t){const a=document.createElement("div");a.className="product-card";const i=document.createElement("div");i.className="product-image",i.innerHTML=`<img
                src="${this._imageUrl}"
                alt="${this._name}"
              />`;const e=document.createElement("div");e.className="add-cart-btn",e.innerHTML=`<div class="add-cart-icon">
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
              </div>
              <span>Add to Cart</span>`;const s='<i class="fa fa-plus-circle" aria-hidden="true"></i>',r='<i class="fa fa-minus-circle" aria-hidden="true"></i>';e.addEventListener("click",()=>{if(e.classList.add("colorBtnIcons"),this._quantity===0){e.innerHTML=`
            <div class="decrement-btn">${r}</div>
            <span class="item-count">${this._quantity}</span>
            <div class="increment-btn">${s}</div>
          `;const u=e.querySelector(".decrement-btn"),h=e.querySelector(".increment-btn");h&&h.addEventListener("click",f=>{this._quantity++;const g=e.querySelector(".item-count");g&&(g.innerHTML=`${this._quantity}`),t.addToCart(this,this._quantity)}),u&&u.addEventListener("click",f=>{if(this._quantity>0){this._quantity--;const g=e.querySelector(".item-count");g&&(g.innerHTML=`${this._quantity}`),t.removeFromCart(this)}})}});const n=document.createElement("div");n.className="product-information";const c=document.createElement("div");c.className="product-category",c.innerHTML=`<span>${this._category}</span>`;const m=document.createElement("div");m.className="product-name",m.innerHTML=`<span>${this._name}</span>`;const d=document.createElement("div");d.className="product-price",d.innerHTML=`<span>$ ${this._price.toFixed(2)}</span>`,n&&(n.appendChild(c),n.appendChild(m),n.appendChild(d));const p=document.getElementById("cards");p&&p.appendChild(a),a.append(i,e,n)}}const l=[{id:"39fe2cad-52ab-46a5-a457-c746781cb90d",image:{thumbnail:"./assets/images/image-waffle-thumbnail.jpg",mobile:"./assets/images/image-waffle-mobile.jpg",tablet:"./assets/images/image-waffle-tablet.jpg",desktop:"./assets/images/image-waffle-desktop.jpg"},name:"Waffle with Berries",category:"Waffle",price:6.5},{id:"e04b9fef-dbf7-4727-a922-5c2dc3f4c106",image:{thumbnail:"./assets/images/image-creme-brulee-thumbnail.jpg",mobile:"./assets/images/image-creme-brulee-mobile.jpg",tablet:"./assets/images/image-creme-brulee-tablet.jpg",desktop:"./assets/images/image-creme-brulee-desktop.jpg"},name:"Vanilla Bean Crème Brûlée",category:"Crème Brûlée",price:7},{id:"21775f94-0faa-4244-ae80-21a5cffdfe76",image:{thumbnail:"./assets/images/image-macaron-thumbnail.jpg",mobile:"./assets/images/image-macaron-mobile.jpg",tablet:"./assets/images/image-macaron-tablet.jpg",desktop:"./assets/images/image-macaron-desktop.jpg"},name:"Macaron Mix of Five",category:"Macaron",price:8},{id:"ea1e46bd-6f6b-4340-b6a3-71539c2d0f1f",image:{thumbnail:"./assets/images/image-tiramisu-thumbnail.jpg",mobile:"./assets/images/image-tiramisu-mobile.jpg",tablet:"./assets/images/image-tiramisu-tablet.jpg",desktop:"./assets/images/image-tiramisu-desktop.jpg"},name:"Classic Tiramisu",category:"Tiramisu",price:5.5},{id:"d37b26f4-a1a0-4134-a0b3-c7f868e42e3f",image:{thumbnail:"./assets/images/image-baklava-thumbnail.jpg",mobile:"./assets/images/image-baklava-mobile.jpg",tablet:"./assets/images/image-baklava-tablet.jpg",desktop:"./assets/images/image-baklava-desktop.jpg"},name:"Pistachio Baklava",category:"Baklava",price:4},{id:"a2bd82a8-0847-445e-9063-b6fa4ed6178a",image:{thumbnail:"./assets/images/image-meringue-thumbnail.jpg",mobile:"./assets/images/image-meringue-mobile.jpg",tablet:"./assets/images/image-meringue-tablet.jpg",desktop:"./assets/images/image-meringue-desktop.jpg"},name:"Lemon Meringue Pie",category:"Pie",price:5},{id:"e6af6678-5646-4212-9ba0-5671a975e3e1",image:{thumbnail:"./assets/images/image-cake-thumbnail.jpg",mobile:"./assets/images/image-cake-mobile.jpg",tablet:"./assets/images/image-cake-tablet.jpg",desktop:"./assets/images/image-cake-desktop.jpg"},name:"Red Velvet Cake",category:"Cake",price:4.5},{id:"c28d9a19-871a-4a4b-95ff-d9e13e4d94ec",image:{thumbnail:"./assets/images/image-brownie-thumbnail.jpg",mobile:"./assets/images/image-brownie-mobile.jpg",tablet:"./assets/images/image-brownie-tablet.jpg",desktop:"./assets/images/image-brownie-desktop.jpg"},name:"Salted Caramel Brownie",category:"Brownie",price:4.5},{id:"aff6f947-540d-4c15-8a8a-872128f1882e",image:{thumbnail:"./assets/images/image-panna-cotta-thumbnail.jpg",mobile:"./assets/images/image-panna-cotta-mobile.jpg",tablet:"./assets/images/image-panna-cotta-tablet.jpg",desktop:"./assets/images/image-panna-cotta-desktop.jpg"},name:"Vanilla Panna Cotta",category:"Panna Cotta",price:6.5}];class v{constructor(){this._products=[],this._total=0}get products(){return this._products}get total(){return this._total}addToCart(t,a){const i=this._products.find(e=>e.id===t.id);i?(i.incrementQuantity(),this._total+=t.price):(this._total+=t.price*a,this._products.push(new b(t.id,t.name,t.category,t.price,t.imageUrl,a))),this.updateCart()}removeFromCart(t){const a=this._products.find(i=>i.id===t.id);a&&(a.quantity>1?(a.decrementQuantity(),this._total-=t.price):(this._total-=t.price,this._products=this._products.filter(i=>i.id!==t.id))),this.updateCart()}getItems(){return this._products}getTotalQuantity(){return this.products.reduce((t,a)=>t+a.quantity,0)}updateCart(){const t=document.getElementById("cart-content"),a=document.getElementById("header-cart");if(t){t.innerHTML="",this.products.forEach(n=>{const c=document.createElement("div");c.className="cart-item",c.innerHTML=`
                    <div class="infoName">
                        <span class="names-styles">${n.name}</span>
                        <span class="removeCart-btn"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg></i></span>
                    </div>
                    <div class="infoCart">
                        <span class="quantity-styles">X${n.quantity}</span>
                        <span class="price-styles">$ ${n.price.toFixed(2)}</span>
                        <span class="price-styles-total">$ ${(n.price*n.quantity).toFixed(2)}</span>
                    </div>
                `;const m=c.querySelector(".removeCart-btn");m&&m.addEventListener("click",()=>{this.removeFromCart(n)}),t.append(c)});const i=document.getElementById("change-quantity");i&&(i.innerHTML=`(${this.getTotalQuantity()})`,a==null||a.appendChild(i));const e=document.createElement("div");e.className="total-price",e.innerHTML=`<span>Order Total</span>
            <span id="price-total">$ ${this._total.toFixed(2)}</span>`;const s=document.createElement("div");s.className="carbon",s.innerHTML=`<img src="./assets/images/icon-carbon-neutral.svg" alt="" srcset="" />
      <span>This is a carbon neutral delivery</span>`;const r=document.createElement("div");r.className="order-btn",r.innerHTML="<span>Confirm Order</span>",r.addEventListener("click",()=>{const n=document.createElement("div");if(n.className="modal",this.total!=0){let m="<ul>";this.products.forEach(d=>{m+=`
                    <li>
                    <div class="container-order-list">
                      <div class="order-list-img">
                        <img src="${d.imageUrl}" />
                      </div>
                      <div>
                        <div>
                          <span class="product-name-order">${d.name}</span>
                        </div>
                        <div class="organize-products-order">
                          <div class="quantity-price-order">
                            <span class="quantity-styles">X${d.quantity}</span>
                            <span class="price-styles">@$${d.price.toFixed(2)}</span>
                          <div>
                          <div>
                            <span class="price-styles-total">$ ${(d.price*d.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                      
                    </li>
                `}),m+="</ul>",n.innerHTML=`
                <div class="modal-content">
                    <span class="close-btn">&times;</span>
                    <div class="header-modal">
                      <img src="./assets/images/icon-order-confirmed.svg" />
                      <h2>Order confirmed</h2>
                      <span>We hope you enjoy your food!</span>
                    </div>
                    <div class="order-list-product">
                      <div class="order-item-list">${m}</div>
                    </div>
                    
                    <div class="modal-total">
                        <span>Total Price:</span>
                        <strong>$ ${this.total.toFixed(2)}</strong>
                    </div>
                    <div class="new-order-btn">
                        <div class="order-btn">
                          <span>Start new order</span>
                        </div>
                    </div>
                </div>
            `,document.body.appendChild(n)}const c=n.querySelector(".close-btn");c&&c.addEventListener("click",()=>{document.body.removeChild(n)})}),t.appendChild(e),t.appendChild(s),t.appendChild(r)}}}const y=new v;for(let o=0;o<l.length;o++)new b(l[o].id,l[o].name,l[o].category,l[o].price,l[o].image.desktop).renderProducts(y);
