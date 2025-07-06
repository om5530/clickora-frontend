import { Routes } from '@angular/router';

export const routes: Routes = [
  {
      path: '',
      children:[
        {
          path: '',
          redirectTo: 'login',
          pathMatch: 'full'
        },
        {
          path: 'login',
          loadComponent: () => import('./auth/login/login').then(m => m.Login),
        }
      ]
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then(m => m.adminRoutes)
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.routes').then(m => m.customerRoutes)
  },
];
