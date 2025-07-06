import { Routes } from '@angular/router';
import { Admin } from './admin';
import { ProductManagement } from './product-management/product-management';
import { OrderManagement } from './order-management/order-management';

export const adminRoutes: Routes = [
  {
    path: '',
    component: Admin,
    children: [
      {
        path: '',
        redirectTo: 'product-management',
        pathMatch: 'full'
      },
      {
        path: 'product-management',
        loadComponent: () => import('./product-management/product-management').then(m => m.ProductManagement)
      },
      {
        path: 'order-management',
        loadComponent: () => import('./order-management/order-management').then(m => m.OrderManagement)
      }
    ]
  }
];
