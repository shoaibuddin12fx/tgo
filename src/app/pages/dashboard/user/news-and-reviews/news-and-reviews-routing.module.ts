import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsAndReviewsPage } from './news-and-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: NewsAndReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsAndReviewsPageRoutingModule {}
