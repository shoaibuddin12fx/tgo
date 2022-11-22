import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCategorySliderBoxesComponent } from './home-category-slider-boxes.component';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HomeCategorySliderBoxesComponent],
  imports: [CommonModule, SwiperModule, IonicModule],
  exports: [HomeCategorySliderBoxesComponent],
})
export class HomeCategorySliderBoxesModule {}
