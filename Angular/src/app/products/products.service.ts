import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    getProducts(): Product[] {
        return [
            { name: 'Chocolate Cake', price: 500, icon: '🍰' },
            { name: 'Black Forest Cake', price: 600, icon: '🎂' },
            { name: 'Donuts', price: 80, icon: '🍩' },
            { name: 'Cookies', price: 150, icon: '🍪' }
        ];
    }
}
