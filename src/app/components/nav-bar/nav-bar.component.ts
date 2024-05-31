
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';



@Component({
  standalone: true,
  imports: [
    RouterModule, 
    RouterLink, 
    NgbAlert, 
    FormsModule,
    ProductsComponent,
    CommonModule
  ],
  selector: 'app-navbar',
  templateUrl: "nav-bar.component.html",
  styleUrl:"nav-bar.component.css" ,
})
export class NavbarComponent {

  constructor(private productService: ProductsService) {}
  
  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.productService.updateSearchTerm(input.value);
    console.log(input.value);
  }
 }

