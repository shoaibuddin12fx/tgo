import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage extends BasePage implements OnInit {
  bgLoaded = false;
  showLogo = false;
  showLogButtons = false;
  fullbackground;
  long_logo;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.initialize();
  }

  async initialize() {
    const res = await this.dataService.getSplashImages();
    this.fullbackground = res.image;
    this.long_logo = res.long_logo;

    setTimeout(() => {
      this.showLogButtons = true;
    }, 1000);

    /*
    setTimeout(() => {
      this.showLogo = true;
      // this.nav.push('pages/login');
      setTimeout(async () => {
        let token = localStorage.getItem('token');
        if (token && token != '1') {
          console.log('TOKEN iS ', token);

           let isAuthenticated = await this.users.getIsAuthenticated();
          if (isAuthenticated) {
            this.navigate('home');
            this.menuCtrl.enable(true, 'main');
          } else {
            console.log('Navigating to login');
            this.navigate('login');
          }
        } else this.navigate('login');
      }, 3000);
    }, 1000);
    */
  }

  navigate(page, n) {
    this.nav.push(`pages/${page}`, { num: n });
  }

  updateBackgroundView() {
    this.bgLoaded = true;
  }
}
