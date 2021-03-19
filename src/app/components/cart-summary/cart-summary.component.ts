import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[];
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }
  getCart() {
    this.cartItems = this._cartService.list();
  }

  removeFromCart(product:Product){
    this._cartService.removeFromCart(product);
  }
}
