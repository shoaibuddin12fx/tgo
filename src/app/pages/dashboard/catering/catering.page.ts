import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/basic/nav.service';
import { CartPage } from '../../cart/cart.page';
import { NotificationsPage } from '../notifications/notifications.page';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.page.html',
  styleUrls: ['./catering.page.scss'],
})
export class CateringPage implements OnInit {
  modals: any;

  constructor(private nav: NavService) { }

  ngOnInit() {
  }
  back(){
    this.nav.pop()
  }
  addToCart() {
    // this.nav.push('pages/cart');
    this.modals.present(CartPage);
  }

  gotoNotifications(){
    this.modals.present(NotificationsPage);
  }

  

}
