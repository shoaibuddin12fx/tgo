import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNextSliderComponent } from './home-next-slider.component';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HomeNextSliderComponent],
  imports: [CommonModule, SwiperModule, IonicModule],
  exports: [HomeNextSliderComponent],
})
export class HomeNextSliderModule {}
