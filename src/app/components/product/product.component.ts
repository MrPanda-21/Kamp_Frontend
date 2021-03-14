import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product1 = {productName: 'Camera',productId :1,categoryId:1}
  product2 = {productName: 'WebToken',productId:2,categoryId:2}
  product3 = {productName: 'Telephone',productId:3,categoryId:1}

  products = [this.product1,this.product2,this.product3]
  constructor() { }

  ngOnInit(): void {
  }

}
