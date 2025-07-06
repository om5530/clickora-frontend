// src/app/customer/customer.routes.ts
import { Routes } from '@angular/router';
import { Customer } from './customer';
import { Products } from './products/products';
import { ProductDetails } from './products/product-details/product-details';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { OrderHistory } from './order-history/order-history';

export const customerRoutes: Routes = [
  {
    path: '',
    component: Customer,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        loadComponent: () => import('./products/products').then(m => m.Products)
      },
      {
        path: 'products/:id',
        loadComponent: () => import('./products/product-details/product-details').then(m => m.ProductDetails)
      },
      {
        path: 'cart',
        loadComponent: () => import('./cart/cart').then(m => m.Cart)
      },
      {
        path: 'checkout',
        loadComponent: () => import('./checkout/checkout').then(m => m.Checkout)
      },
      {
        path: 'order-history',
        loadComponent: () => import('./order-history/order-history').then(m => m.OrderHistory)
      },
    ]
  },
  
];
