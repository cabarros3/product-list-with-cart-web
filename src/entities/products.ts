import { v4 as uuid4 } from "uuid";

export class Product {
    private _id: string = uuid4();
    private _name: string = "";
    private _category: string = "";
    private _price: number = 0;
    private _imageUrl: string = "";


    constructor (name:string, category: string, price: number, imageUrl: string) {
        this._category = category,
        this._price = price,
        this._name = name,
        this._imageUrl = imageUrl
    }

    render() {
        const containerPrincipal = document.createElement("div")
        containerPrincipal.className = "container-principal"

        const header = document.createElement('div')
        header.className = 'header-product'
        header.innerHTML = `<div class="header-products">
          <h2>Desserts</h2>
        </div>`

        containerPrincipal.append(header)
    
        const mainContainer = document.getElementById('main-id')
        if (mainContainer) {
            mainContainer.appendChild(containerPrincipal)
        }    
    }

    add() {
        return this._id;
    }

    remove() {
        console.log("olá")
    }
    

}

// const produto = new Product(20, "comida","pizza", "dvgfslghjrf");
// console.log(produto.add());