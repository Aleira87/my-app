import { LowerCasePipe, NgFor, NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
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
    RouterLink
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
@Input() product!: Product;; // il punto esclamativo informa che non deve inizializzare product finché richiesto
@Output() myEvent = new EventEmitter<string>;

emitEvent() {
  this.myEvent.emit(this.product.denominazione);
}
}
