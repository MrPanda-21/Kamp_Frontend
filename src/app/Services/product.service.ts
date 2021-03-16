import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string="https://localhost:5001/";
  constructor(private httpClient:HttpClient ) {

  }
  getProducts():Observable<ListResponseModel<Product>>{
    let getAllUrl:string = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(getAllUrl)
  }
  getProductsByCategory( categoryId:number):Observable<ListResponseModel<Product>>{
    let getCategoryUrl = this.apiUrl + "products/category?categoryId=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl)
  }

}

