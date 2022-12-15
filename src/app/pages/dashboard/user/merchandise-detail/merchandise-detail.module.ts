import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchandiseDetailPageRoutingModule } from './merchandise-detail-routing.module';

import { MerchandiseDetailPage } from './merchandise-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchandiseDetailPageRoutingModule
  ],
  declarations: [MerchandiseDetailPage]
})
export class MerchandiseDetailPageModule {}
