import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { WebView } from '@capacitor/core';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { InterceptorService } from './services/interceptor.service';
import { UtilityService } from './services/utility.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { SwiperModule } from 'swiper/angular';
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from '@awesome-cordova-plugins/native-page-transitions/ngx';
import { CartPageModule } from './pages/cart/cart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios',
    }),
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    CartPageModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    FormBuilder,
    UtilityService,
    InAppBrowser,
    UtilityService,
    Geolocation,
    LaunchNavigator,
    NativePageTransitions,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
