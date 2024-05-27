
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';


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

  searchQuery: string = '';
  searchResults: Product[] = [];

  constructor(private productService: ProductsService) {}

  search() {
    this.productService.searchProducts(this.searchQuery).subscribe(results => {
      this.searchResults = results;
      console.log(results);
    
    });
  // constructor(private productService:ProductsService) {};
  
  // onSearch(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   this.productService.updateSearchTerm(input.value);
  // }
  }
 }

