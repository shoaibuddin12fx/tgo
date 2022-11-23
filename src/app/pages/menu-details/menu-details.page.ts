import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { CartPage } from '../cart/cart.page';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.page.html',
  styleUrls: ['./menu-details.page.scss'],
})
export class MenuDetailsPage extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}
  back() {
    this.nav.pop();
  }
  addToCart() {
    // this.nav.push('pages/cart');
    this.modals.present(CartPage);
  }
}
