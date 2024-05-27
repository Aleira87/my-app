import { Component, input, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from '../products/products.component';

@Component({
  standalone: true,
  imports: [
    RouterModule, 
    RouterLink, 
    NgbAlert, 
    FormsModule,
    ProductsComponent
  ],
  selector: 'app-navbar',
  templateUrl: "nav-bar.component.html",
  styleUrl:"nav-bar.component.css" ,
})
export class NavbarComponent {

   @Input() filtro: string= "";
  
 }
