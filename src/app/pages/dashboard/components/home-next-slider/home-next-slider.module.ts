import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNextSliderComponent } from './home-next-slider.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [HomeNextSliderComponent],
  imports: [CommonModule, SwiperModule],
  exports: [HomeNextSliderComponent],
})
export class HomeNextSliderModule {}
