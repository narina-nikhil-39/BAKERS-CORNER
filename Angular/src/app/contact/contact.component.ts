import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
        <section class="panel form-panel">
            <h2>Order Form</h2>
            <form #orderForm="ngForm" (ngSubmit)="submitForm()" class="order-form">
                <label for="customer-name">Name</label>
                <input
                    id="customer-name"
                    type="text"
                    name="name"
                    [(ngModel)]="name"
                    required
                >

                <label for="product">Product</label>
                <select id="product" name="product" [(ngModel)]="product" required>
                    <option value="" disabled>Select a product</option>
                    <ng-container *ngFor="let item of productNames">
                        <option [value]="item">{{ item }}</option>
                    </ng-container>
                </select>

                <button type="submit" [disabled]="orderForm.invalid">Place Order</button>
            </form>
            @if (confirmation) {
                <p class="status" role="status">{{ confirmation }}</p>
            }
        </section>
    `
})
export class ContactComponent {
    name = '';
    product = '';
    confirmation = '';
    readonly productNames = [
        'Chocolate Cake',
        'Black Forest Cake',
        'Donuts',
        'Cookies'
    ];

    submitForm(): void {
        this.confirmation = `Order placed by ${this.name.trim()} for ${this.product}.`;
    }
}
