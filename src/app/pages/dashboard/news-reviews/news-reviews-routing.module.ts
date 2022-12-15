import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsReviewsPage } from './news-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: NewsReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsReviewsPageRoutingModule {}
