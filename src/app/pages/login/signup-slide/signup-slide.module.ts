import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupSlideComponent } from './signup-slide.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IconInputBoxModule } from 'src/app/components/icon-input-box/icon-input-box.module';

@NgModule({
  declarations: [SignupSlideComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IconInputBoxModule,
  ],
  exports: [SignupSlideComponent],
})
export class SignupSlideModule {}
