import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductBindingComponent } from './product-binding/product-binding.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'binding', component: ProductBindingComponent },
    { path: '**', redirectTo: '' }
];
