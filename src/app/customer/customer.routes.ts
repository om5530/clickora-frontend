// src/app/customer/customer.routes.ts
import { Routes } from '@angular/router';

export const customerRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./customer').then(m => m.Customer),
    children: [
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
