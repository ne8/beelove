import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const productsLocation = '/assets/data/products.json';


@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private http: HttpClient) {
  }

  getProucts() {
    return this.http.get(productsLocation);
  }}
