import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-binding',
    standalone: true,
    imports: [CommonModule],
    template: `
        <section class="panel">
            <h2>Bakery Product</h2>
            <div *ngIf="showProduct">
                <p>Product: {{ product }}</p>
                <p>Price: ₹{{ price }}</p>
            </div>
            <button type="button" (click)="changeProduct()">Change Product</button>
        </section>
    `
})
export class ProductBindingComponent {
    product = 'Chocolate Cake';
    price = 500;
    showProduct = true;

    changeProduct(): void {
        this.product = 'Black Forest Cake';
        this.price = 600;
    }
}
