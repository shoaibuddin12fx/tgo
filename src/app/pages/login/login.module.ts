import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { IconInputBoxModule } from 'src/app/components/icon-input-box/icon-input-box.module';
import { LoginSlideModule } from './login-slide/login-slide.module';
import { SignupSlideModule } from './signup-slide/signup-slide.module';
import { ForgetpasswordSlideModule } from './forgetpassword-slide/forgetpassword-slide.module';
// import { FooterModule } from 'src/app/components/footer/footer.module';
// import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconInputBoxModule,
    LoginSlideModule,
    SignupSlideModule,
    ForgetpasswordSlideModule,
    SwiperModule,
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
