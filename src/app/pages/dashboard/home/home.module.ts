import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HomeSliderModule } from '../components/home-slider/home-slider.module';
import { HomeCategorySliderModule } from '../components/home-category-slider/home-category-slider.module';
import { HomeCategorySliderBoxesModule } from '../components/home-category-slider-boxes/home-category-slider-boxes.module';
import { HomeNextSliderModule } from '../components/home-next-slider/home-next-slider.module';
import { CcBoxLayoutModule } from 'src/app/components/cc-box-layout/cc-box-layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HomeSliderModule,
    HomeCategorySliderModule,
    HomeCategorySliderBoxesModule,
    HomeNextSliderModule,
    CcBoxLayoutModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
