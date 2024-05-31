import { Component } from '@angular/core';
import { NavbarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';


@Component({ // decoratore aggiunge proprietà alla classe
  standalone: true,
  imports: [NavbarComponent, RouterModule, ProductsComponent],
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  
  `,
  styles: []
})
export class AppComponent { }
