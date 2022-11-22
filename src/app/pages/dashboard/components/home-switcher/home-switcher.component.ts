import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SSL_OP_NO_TLSv1_1 } from 'constants';

@Component({
  selector: 'app-home-switcher',
  templateUrl: './home-switcher.component.html',
  styleUrls: ['./home-switcher.component.scss'],
})
export class HomeSwitcherComponent implements OnInit {
  menulist = [
    {
      id: 1,
      label: 'Home',
      icon: 'assets/images/home/footer/home.svg',
      icon_active: 'assets/images/home/footer/home-active.svg',
      active: 0,
      route: 'pages/dashboard/home',
    },
    {
      id: 2,
      label: 'Menu',
      icon: 'assets/images/home/footer/menu.svg',
      icon_active: 'assets/images/home/footer/menu-active.svg',
      active: 0,
      route: 'pages/dashboard/menu',
    },
    {
      id: 3,
      label: 'Location',
      icon: 'assets/images/home/footer/location.svg',
      icon_active: 'assets/images/home/footer/location-active.svg',
      active: 0,
      route: 'pages/dashboard/location',
    },
    {
      id: 4,
      label: 'User',
      icon: 'assets/images/home/footer/user.svg',
      icon_active: 'assets/images/home/footer/user-active.svg',
      active: 0,
      route: 'pages/dashboard/user',
    },
  ];

  @Output('activeIndex') activeIndex: EventEmitter<any> =
    new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  makeActive(item) {
    this.menulist = this.menulist.map((x) => {
      x.active = x.id == item.id ? 1 : 0;
      return x;
    }) as any[];

    this.activeIndex.emit(item);
  }
}
