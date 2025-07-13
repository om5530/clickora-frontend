import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-customer',
  imports: [RouterModule, ButtonModule, MenubarModule, RouterModule],
  standalone: true,
  templateUrl: './customer.html',
  styleUrl: './customer.scss'
})
export class Customer {
  items: any[];
  constructor(private router: Router) {
    this.items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/',
    },
    {
      label: 'Profile',
      icon: 'pi pi-user',
      routerLink: '/profile',
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      routerLink: '/settings',
    },
  ];
  }

  logout() {
    console.log('User logged out');
    this.router.navigate(['/login']);
  }
}
