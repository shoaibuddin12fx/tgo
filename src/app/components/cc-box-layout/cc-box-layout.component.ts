import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';

@Component({
  selector: 'app-cc-box-layout',
  templateUrl: './cc-box-layout.component.html',
  styleUrls: ['./cc-box-layout.component.scss'],
})
export class CcBoxLayoutComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  menuDetails() {
    this.nav.push('pages/menu-details');
  }
}
