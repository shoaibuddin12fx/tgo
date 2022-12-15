import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedProductPageRoutingModule } from './selected-product-routing.module';

import { SelectedProductPage } from './selected-product.page';
import { SelectedItemModule } from './selected-item/selected-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedProductPageRoutingModule,
    SelectedItemModule
  ],
  declarations: [SelectedProductPage]
})
export class SelectedProductPageModule {}
