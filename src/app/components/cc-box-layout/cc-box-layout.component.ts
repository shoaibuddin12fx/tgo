import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cc-box-layout',
  templateUrl: './cc-box-layout.component.html',
  styleUrls: ['./cc-box-layout.component.scss'],
})
export class CcBoxLayoutComponent extends BasePage implements OnInit {
  tacos: any;
  constructor(injector: Injector) {
    super(injector);
    const dataService = new DataService();
    this.tacos = this.dataService.getTacos();
  }

  ngOnInit() {
    console.log(this.tacos);
  }

  menuDetails() {
    this.nav.push('pages/menu-details');
  }
}
