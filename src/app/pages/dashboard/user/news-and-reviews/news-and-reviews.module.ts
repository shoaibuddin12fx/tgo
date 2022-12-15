import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsAndReviewsPageRoutingModule } from './news-and-reviews-routing.module';

import { NewsAndReviewsPage } from './news-and-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsAndReviewsPageRoutingModule
  ],
  declarations: [NewsAndReviewsPage]
})
export class NewsAndReviewsPageModule {}
