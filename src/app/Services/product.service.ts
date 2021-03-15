import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModule } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:5001/products/getall";
  constructor(private httpClient:HttpClient ) {

  }
  getProducts():Observable<ProductResponseModule>{
    return this.httpClient.get<ProductResponseModule>(this.apiUrl)
  }
}

