
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {  

  constructor(private http: HttpClient) { }
  private url: string = "https://server-node-igna.vercel.app/shops";
  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();
 
  
  getProducts(): Observable<Product[]> { //Observable osserva la richiesta e appena arriva "risponde"
    return this.http.get<Product[]>(this.url)}

  updateSearchTerm(term: string) {
    this.searchSubject.next(term);
  } 

  // searchProducts(query: string): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.url).pipe(
  //     map(products => products.filter(product =>
  //       product.denominazione.toLowerCase().includes(query.toLowerCase())
  //     ))
  //   );
// }  
}
