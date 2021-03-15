import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http'
import { ProductResponseModule } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/Services/product.service';

@Component({

  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded=false
  
  
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this._productService.getProducts().subscribe(response => {
      this.products =response.data 
      this.dataLoaded = true
    })
  }
}
