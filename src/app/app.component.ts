import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ModalService } from './services/basic/modal.service';
import { NavService } from './services/basic/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  @Output('activeIndex') activeIndex: EventEmitter<any> =
    new EventEmitter<any>();
  constructor(public menuCtrl: MenuController, private modals: ModalService, injector: Injector,  public nav: NavService) {
  }

  logout() {
    
    this.nav.setRoot('pages/login');
    this.menuCtrl.close()
  }

  gotoHome() {
    console.log("go to Home")
    
    this.nav.push('pages/dashboard/home');
    this.menuCtrl.close()
  }

  gotoMerchandise(){
    this.nav.push('pages/products-list');
    this.menuCtrl.close()
  }
  
  gotoReviewlist(){
    this.nav.push('pages/reviews-list');
    this.menuCtrl.close()
  }
  gotoUser(){
    this.nav.push('pages/dashboard/user');
    this.menuCtrl.close()
  }
  gotoCatering(){
    this.nav.push('pages/catering');
    this.menuCtrl.close()
  }
}
