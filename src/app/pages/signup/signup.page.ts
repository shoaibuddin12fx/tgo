import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Browser } from '@capacitor/browser';
// import { PLAN_TYPE } from 'src/app/data/const/enums';
import { StringsService } from 'src/app/services/basic/strings.service';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage extends BasePage implements OnInit, AfterViewInit {
  constructor(injector: Injector) {
    super(injector);
  }
  ngAfterViewInit(): void {}

  ngOnInit() {}
}
