import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss'],
})
export class CartListItemComponent implements OnInit {
  list: any = [
    {
      name: 'FRESH GUACAMOLE AND CHIPS',
      regular: '$6.99',
      Large: '$10.99',
      url: '../../../../assets/images/tocos/menu/FRESH-GUACAMOLE-AND-CHIPS.svg',
    },
    {
      name: 'CHIPS & SALSA',
      regular: '$2.99',
      Large: '$4.99',
      url: 'assets/images/tocos/menu/CHIPS-&-SALSA.svg',
    },
    {
      name: 'MEXICAN STREET CORN',
      regular: '$4.99',
      Large: '$7.99',
      url: 'assets/images/tocos/menu/MEXICAN-STREET-CORN.svg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
