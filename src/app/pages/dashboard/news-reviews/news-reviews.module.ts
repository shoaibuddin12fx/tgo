import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsReviewsPageRoutingModule } from './news-reviews-routing.module';

import { NewsReviewsPage } from './news-reviews.page';
import { CreateReviewModule } from './create-review/create-review.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsReviewsPageRoutingModule,
    CreateReviewModule
  ],
  declarations: [NewsReviewsPage]
})
export class NewsReviewsPageModule {}
