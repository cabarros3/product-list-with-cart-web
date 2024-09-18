class Produto {
    private _preco: number = 0;
    private _imageUrl: string = "";
    private _category: string = "";
    private _productTile: string = "";


    constructor (preco: number, category: string, title:string) {
        this._category = category,
        this._preco = preco,
        this._productTile = title
    }

    add() {

        const getPrice = document.getElementById("product-price")
        console.log(getPrice);
    }
    

}