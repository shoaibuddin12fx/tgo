import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedProductPage } from './selected-product.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedProductPageRoutingModule {}
