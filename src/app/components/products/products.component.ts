
import { ProductsService } from '../../services/products.service';
import { LowerCasePipe, NgFor, NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { ProductComponent } from '../product/product.component';
import dogs from '../../data/shops';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgbAlert,
    MatCardModule, 
    MatButtonModule, 
    NgFor,
    NgIf,
    UpperCasePipe,
    TitleCasePipe,
    LowerCasePipe,
    FormsModule,
    ProductComponent
    ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{ 
 cards=dogs;

 products: Product[] = [];
 filteredProducts: Product[] = [];
 filtro: string= ""

 constructor(private ProductsService: ProductsService, ) { }
ngOnInit(): void {
    this.ProductsService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });

    this.ProductsService.search$.subscribe(term => {
      this.filteredProducts = this.products.filter(product => 
        product.denominazione.toLowerCase().startsWith(term.toLowerCase())
      );
    });
}

handleEvent(event: string) {
  console.log(event);
}
}
