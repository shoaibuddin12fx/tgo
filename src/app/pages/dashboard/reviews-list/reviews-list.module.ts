import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewsListPageRoutingModule } from './reviews-list-routing.module';

import { ReviewsListPage } from './reviews-list.page';
import { ReviewsModule } from './reviews/reviews.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewsListPageRoutingModule,
    ReviewsModule
  ],
  declarations: [ReviewsListPage]
})
export class ReviewsListPageModule {}
