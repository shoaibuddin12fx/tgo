import {
  Component,
  Injector,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { emit } from 'process';
import { DataService } from 'src/app/services/data.service';
import { BasePage } from '../base-page/base-page';
import { CartPage } from '../cart/cart.page';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.page.html',
  styleUrls: ['./menu-details.page.scss'],
})
export class MenuDetailsPage extends BasePage implements OnInit {
  @Output() EmitMenu = new EventEmitter<string>();
  main_title: any;
  menu_details: any;
  allData: any;
  relatedMenu: any = [];

  constructor(injector: Injector) {
    super(injector);
    const dataService = new DataService();
    this.allData = dataService.getMenuDetail();
    this.main_title = this.allData[0];
    this.menu_details = this.allData[1];
    console.log(this.menu_details);
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
