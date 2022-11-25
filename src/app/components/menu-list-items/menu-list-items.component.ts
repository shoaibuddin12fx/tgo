import { Component, Input, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/basic/nav.service';
// import {} from "../../../assets/images/tocos/menu"

@Component({
  selector: 'app-menu-list-items',
  templateUrl: './menu-list-items.component.html',
  styleUrls: ['./menu-list-items.component.scss'],
})
export class MenuListItemsComponent implements OnInit {
  list: any[] = [
    {
      name: 'FRESH GUACAMOLE AND CHIPS',
      regular: '$6.99',
      Large: '$10.99',
      url: '../../assets/images/tocos/menu/FRESH-GUACAMOLE-AND-CHIPS.svg',
    },
    {
      name: 'CHIPS & SALSA',
      regular: '$2.99',
      Large: '$4.99',
      url: '../../assets/images/tocos/menu/CHIPS-&-SALSA.svg',
    },
    {
      name: 'MEXICAN STREET CORN',
      regular: '$4.99',
      Large: '$7.99',
      url: '../../assets/images/tocos/menu/MEXICAN-STREET-CORN.svg',
    },
  ];
  _limit = 3;
  @Input()
  public get limit(): number {
    return this._limit;
  }

  public set limit(value: number) {
    // this._limit = value;
    // var l: any[] = [];
    // for (var i = 0; i < value; i++) {
    //   l.push(value);
    // }
    // this.list = l;
  }

  constructor(private nav: NavService) {}

  ngOnInit() {}
}
