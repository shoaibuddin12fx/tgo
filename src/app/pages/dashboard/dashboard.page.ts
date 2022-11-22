import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends BasePage implements OnInit {
  activeIndexId = 1;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  activeIndex($event) {
    console.log($event);
    this.activeIndexId = $event.id;
    this.nav.push($event.route);
  }
}
