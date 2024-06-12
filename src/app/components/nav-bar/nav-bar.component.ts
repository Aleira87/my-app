
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';



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
  token: string | null = "";

  constructor(private productService: ProductsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.token$.subscribe((token: any) => {
      this.token = token;
      console.log('Token changed:', this.token); // Aggiungi questo per il debug
    })
  }

  logout() {
    this.authService.logout();
  }

  
  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.productService.updateSearchTerm(input.value);
    console.log(input.value);
  }
 }

