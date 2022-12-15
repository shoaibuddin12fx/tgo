import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { BaseHeaderModule } from 'src/app/components/base-header/base-header.module';
import { HomeSwitcherModule } from './components/home-switcher/home-switcher.module';
import { ProductsListPageModule } from './products-list/products-list.module';
import { SelectedProductPage } from './selected-product/selected-product.page';
import { SelectedProductPageModule } from './selected-product/selected-product.module';
import { ReviewsListPageModule } from './reviews-list/reviews-list.module';
import { NewsReviewsPageModule } from './news-reviews/news-reviews.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    BaseHeaderModule,
    HomeSwitcherModule,
    ProductsListPageModule,
    SelectedProductPageModule,
    // ReviewsListPageModule,
    NewsReviewsPageModule
  
  
  ],
  declarations: [DashboardPage],
})
export class DashboardPageModule {}
