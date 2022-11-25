import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item;
  qty = 1;
  constructor() {}

  increment() {
    this.qty++;
    console.log(this.qty);
  }
  decrement() {
    if (this.qty > 1) {
      this.qty--;
    } else {
    }
  }
  clearCart() {
    console.log('clear cart');
    this.qty = 0;
  }

  ngOnInit() {}
}
