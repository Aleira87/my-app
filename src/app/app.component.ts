import { Component } from '@angular/core';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';


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
