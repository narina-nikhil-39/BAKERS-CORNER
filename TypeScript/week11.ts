export interface Product {
    name: string;
    price: number;
}

export class BakeryProduct implements Product {
    constructor(
        public name: string,
        public price: number
    ) {}

    display(): void {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ₹${this.price}`);
    }
}

export function showProduct(product: Product): void {
    console.log(`Product Name: ${product.name}`);
    console.log(`Product Price: ₹${product.price}`);
}

export function runProductDemo(): void {
    const cake = new BakeryProduct("Chocolate Cake", 500);
    cake.display();
    showProduct(cake);
}
