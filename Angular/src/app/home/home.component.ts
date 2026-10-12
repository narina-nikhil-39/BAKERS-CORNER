import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
        <section class="panel welcome-panel">
            <h2>{{ message }}</h2>
            <p>Fresh cakes, cookies and bakery products, made with care.</p>
            <p>Browse our products or send us an order request.</p>
            <div class="featured-products" aria-label="Freshly baked favourites">
                <span aria-label="Cake">🍰</span>
                <span aria-label="Cupcake">🧁</span>
                <span aria-label="Donut">🍩</span>
                <span aria-label="Cookies">🍪</span>
            </div>
        </section>
    `
})
export class HomeComponent {
    message = 'Welcome to Bakers Corner!';
}
