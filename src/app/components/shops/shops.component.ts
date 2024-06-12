import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Shop } from '../../interfaces/shop';
// import items from '../data/products';

@Component({
  selector: 'shop',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.css',
})
export class ShopsComponent implements OnInit {
  @Input() shop: Shop[] = [];
  filteredShops: Shop[] = [];
  filtro: string = '';

  @Output() myEvent = new EventEmitter<string>();
  handleEvent(event: string) {
    console.log(event);
  }

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    // Carica i prodotti all'inizializzazione
    this.productService.getProducts().subscribe((data) => {
      this.shop = data;
      this.filteredShops = data;
    });

    this.productService.search$.subscribe((term) => {
      this.filteredShops = this.shop.filter((shop) =>
        shop.denominazione.toLowerCase().includes(term.toLowerCase())
      );
    });
  }
}
