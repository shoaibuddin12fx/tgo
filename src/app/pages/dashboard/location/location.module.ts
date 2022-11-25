import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPageRoutingModule } from './location-routing.module';

import { LocationPage } from './location.page';
import { HomeCategorySliderBoxesModule } from '../components/home-category-slider-boxes/home-category-slider-boxes.module';
import { ItemBoxPhModule } from 'src/app/components/item-box-ph/item-box-ph.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationPageRoutingModule,
    ItemBoxPhModule,
  ],
  declarations: [LocationPage],
})
export class LocationPageModule {}
