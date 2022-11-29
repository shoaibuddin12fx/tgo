import { Component, Injector, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BasePage implements OnInit {
  obje76: any[] = [];
  constructor(injector: Injector) {
    super(injector);
    const dataService = new DataService();
    var dd: any[] = this.dataService.getTacos();

    this.obje76 = dd;
  }

  ngOnInit() {}

  openSelection($event) {
    console.log($event);
    this.nav.push('pages/menu-details', { item: JSON.stringify($event) });
  }
}
