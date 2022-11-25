import { Component, OnInit } from '@angular/core';
import { CartPage } from 'src/app/pages/cart/cart.page';
import { ModalService } from 'src/app/services/basic/modal.service';

@Component({
  selector: 'app-base-header',
  templateUrl: './base-header.component.html',
  styleUrls: ['./base-header.component.scss'],
})
export class BaseHeaderComponent implements OnInit {
  constructor(private modals: ModalService) {}

  ngOnInit() {}
  addToCart() {
    // this.nav.push('pages/cart');
    this.modals.present(CartPage);
  }
}
