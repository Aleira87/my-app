
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {  

  constructor(private http: HttpClient) { }
  private url: string = "https://server-node-igna.vercel.app/shops";
  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();
 
  
  getProducts(): Observable<Product[]> { //Observable osserva la richiesta e appena arriva "risponde"
    return this.http.get<Product[]>(this.url)};

  getProductsByCity(city: string):Observable<Product[]>{ // Oserverà ricerche in base alla città
    return this.http.get<Product[]>(`${this.url}/${city}`)
  };

  updateSearchTerm(term: string) {
    this.searchSubject.next(term);
  } 
}
