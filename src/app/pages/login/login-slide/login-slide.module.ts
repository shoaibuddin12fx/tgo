import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSlideComponent } from './login-slide.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconInputBoxModule } from 'src/app/components/icon-input-box/icon-input-box.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LoginSlideComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IconInputBoxModule,
  ],
  exports: [LoginSlideComponent],
})
export class LoginSlideModule {}
