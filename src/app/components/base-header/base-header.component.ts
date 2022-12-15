import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CartPage } from 'src/app/pages/cart/cart.page';
import { NotificationsPage } from 'src/app/pages/dashboard/notifications/notifications.page';
import { ModalService } from 'src/app/services/basic/modal.service';

@Component({
  selector: 'app-base-header',
  templateUrl: './base-header.component.html',
  styleUrls: ['./base-header.component.scss'],
})
export class BaseHeaderComponent implements OnInit {
  constructor(private modals: ModalService, private menuCtrl: MenuController) {}

  ngOnInit() {}
  addToCart() {
    // this.nav.push('pages/cart');
    this.modals.present(CartPage);
  }

  gotoNotifications(){
    this.modals.present(NotificationsPage);
  }

  
  menuToggle(){
    console.log("am i clicked")
    console.log(this.menuCtrl.toggle())
    this.menuCtrl.open('main-content');
  }
}
