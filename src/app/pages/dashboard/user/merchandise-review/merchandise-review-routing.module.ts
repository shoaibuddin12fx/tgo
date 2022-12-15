import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchandiseReviewPage } from './merchandise-review.page';

const routes: Routes = [
  {
    path: '',
    component: MerchandiseReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchandiseReviewPageRoutingModule {}
