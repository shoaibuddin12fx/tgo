import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchandiseReviewPageRoutingModule } from './merchandise-review-routing.module';

import { MerchandiseReviewPage } from './merchandise-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchandiseReviewPageRoutingModule
  ],
  declarations: [MerchandiseReviewPage]
})
export class MerchandiseReviewPageModule {}
