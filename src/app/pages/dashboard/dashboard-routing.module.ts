import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('./menu/menu.module').then((m) => m.MenuPageModule),
      },
      {
        path: 'location',
        loadChildren: () =>
          import('./location/location.module').then(
            (m) => m.LocationPageModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserPageModule),
      },
    
      
    

    ],
  },
  // {
  //   path: 'products-list',
  //   loadChildren: () => import('./products-list/products-list.module').then( m => m.ProductsListPageModule)
  // },
  // {
  //   path: 'selected-product',
  //   loadChildren: () => import('./selected-product/selected-product.module').then( m => m.SelectedProductPageModule)
  // },

  // {
  //   path: 'news-reviews',
  //   loadChildren: () => import('./news-reviews/news-reviews.module').then( m => m.NewsReviewsPageModule)
  // },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) 
export class DashboardPageRoutingModule { }
