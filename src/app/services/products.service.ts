import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {  

  private url: string = "https://server-node-igna.vercel.app/shops";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> { //Observable osserva la richiesta e appena arriva "risponde"
    return this.http.get<Product[]>(this.url);
  }
  }
