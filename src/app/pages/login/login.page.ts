import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Browser } from '@capacitor/browser';
import { BasePage } from '../base-page/base-page';
// import { FirebaseAuthentication } from '@robingenz/capacitor-firebase-authentication';
// import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';
import { Capacitor } from '@capacitor/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ViewWillEnter } from '@ionic/angular';
import { resolve } from 'dns';
import { Config } from 'src/app/config/main.config';
import { SwiperComponent } from 'swiper/angular';
// import Swiper core and required modules
import SwiperCore, { Swiper, Virtual } from 'swiper';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePage implements OnInit, ViewWillEnter {
  long_logo;

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor(injector: Injector, private iab: InAppBrowser) {
    super(injector);
    this.initialize();
  }

  async initialize() {
    const res = await this.dataService.getSplashImages();
    this.long_logo = res.long_logo;
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false, 'main');
  }

  ngOnInit() {}

  gotoSignup() {
    this.swiper?.swiperRef.slideTo(1);
  }

  gotoLogin() {
    this.swiper?.swiperRef.slideTo(0);
  }

  gotoDashboard() {
    this.nav.push('pages/dashboard');
  }
}
