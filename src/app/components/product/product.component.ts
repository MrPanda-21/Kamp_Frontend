import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http'
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({

  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded=false;
  filterText:string; 
  
  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(response => {
      if (response["categoryId"]) {
        this.getProductsByCategory(response["categoryId"]);
      }
      else {
        this.getProducts();
      }
    })
  }

  getProducts(){
    this._productService.getProducts().subscribe(response => {
      this.products =response.data 
      this.dataLoaded = true
    })
  }

  getProductsByCategory(categoryId:number){
    this._productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products =response.data 
      this.dataLoaded = true
    })
  }
}
