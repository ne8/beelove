export class Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
    pathToImage: string;
    description: string;
    constructor(id: string, name: string, price: number, quantity: number, pathToImage: string, description?: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.pathToImage = pathToImage;
        this.description = description;
    }
}

