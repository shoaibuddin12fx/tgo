import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchandiseDetailPage } from './merchandise-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MerchandiseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchandiseDetailPageRoutingModule {}
