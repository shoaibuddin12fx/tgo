import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';
import { NotificationsPage } from '../notifications/notifications.page';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  logout() {
    this.nav.setRoot('pages/login');
  }
  gotoNotifications(){
    this.modals.present(NotificationsPage)
  }
}
