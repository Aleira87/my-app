import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, RouterLink],
  selector: 'app-navbar',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
        <li><a routerLink="/products" routerLinkActive="active">Prodotti</a></li>
        <li><a routerLink="/about" routerLinkActive="active">Chi Siamo</a></li>
        <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
      </ul>
    </nav>
  `,
  styles: [`
     nav {
      background: linear-gradient(90deg, rgba(29, 78, 216, 1) 0%, rgba(67, 56, 202, 1) 50%, rgba(134, 239, 172, 1) 100%);
      padding: 1em;
      border-radius: 10px;
    }
    .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
    }
    li {
      margin-right: 1em;
      position: relative;
      padding-right: 1em;
    }
    li:not(:last-child)::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      border-right: 1px solid white;
    }
    a {
      color: white;
      text-decoration: none;
    }
    .active {
      font-weight: bold;
    }
  `]
})
export class NavbarComponent { }
