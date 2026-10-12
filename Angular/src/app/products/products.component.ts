import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [CommonModule],
    template: `
        <h2>Our Products</h2>
        <section class="product-grid">
            <ng-container *ngFor="let product of products">
                <article class="panel">
                    <div class="product-visual" aria-hidden="true">{{ product.icon }}</div>
                    <h3>{{ product.name }}</h3>
                    <p class="product-price">Price: ₹{{ product.price }}</p>
                </article>
            </ng-container>
        </section>
    `
})
export class ProductsComponent {
    readonly products: Product[];

    constructor(productsService: ProductsService) {
        this.products = productsService.getProducts();
    }
}
