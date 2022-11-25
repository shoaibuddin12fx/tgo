import {
  Component,
  Injector,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { emit } from 'process';
import { BasePage } from '../base-page/base-page';
import { CartPage } from '../cart/cart.page';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.page.html',
  styleUrls: ['./menu-details.page.scss'],
})
export class MenuDetailsPage extends BasePage implements OnInit {
  @Output() EmitMenu = new EventEmitter<string>();
  relatedMenu: any = [
    {
      name: 'FRESH GUACAMOLE AND CHIPS',
      regular: '$6.99',
      Large: '$10.99',
      url: '../../../../assets/images/tocos/menu/FRESH GUACAMOLE AND CHIPS',
    },
    {
      name: 'CHIPS & SALSA',
      regular: '$2.99',
      Large: '$4.99',
      url: '../../../../assets/images/tocos/menu/CHIPS & SALSA',
    },
    {
      name: 'MEXICAN STREET CORN',
      regular: '$4.99',
      Large: '$7.99',
      url: '../../../../assets/images/tocos/menu/MEXICAN STREET CORN',
    },
  ];

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}
  back() {
    this.nav.pop();
  }

  menu() {
    return this.EmitMenu.emit(this.relatedMenu);
  }

  // menu();

  addToCart() {
    // this.nav.push('pages/cart');
    this.modals.present(CartPage);
  }
}
