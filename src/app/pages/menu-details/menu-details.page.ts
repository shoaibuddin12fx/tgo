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
  objew: any[] = [];
  @Output() EmitMenu = new EventEmitter<string>();
  item;

  types = [
    {
      name: 'Regular',
      prize: '$8.99',
    },
    {
      name: 'Large',
      prize: '$8.99',
    },
  ];

  constructor(injector: Injector) {
    super(injector);
    // const dataService = new DataService();
    // this.allData = dataService.getMenuDetail();
    // this.main_title = this.allData[0];
    // this.menu_details = this.allData[1];
    // console.log(this.menu_details);

    const params = this.nav.getQueryParams();
    if (params['item']) {
      const r = JSON.parse(params['item']);
      console.log(r);
      this.item = r;
    } else {
      this.nav.pop();
      return;
    }

    // check which list has this item

    this.objew = this.dataService.getTacos();
    // const id = this.item.id;
    // if (id < 5) {
    //   this.objew = this.objew.splice(0, 1);
    // } else {
    //   this.objew = this.objew.splice(1, 1);
    // }
  }

  ngOnInit() {}
  back() {
    this.nav.pop();
  }

  // menu();

  addToCart() {
    // this.nav.push('pages/cart');
    this.modals.present(CartPage);
  }
}
