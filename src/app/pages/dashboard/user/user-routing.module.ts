import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage,
    children: [
      
    ]
    




  },
  
  {
    path: 'merchandise',
    loadChildren: () => import('./merchandise/merchandise.module').then( m => m.MerchandisePageModule)
  },
  {
    path: 'merchandise-detail',
    loadChildren: () => import('./merchandise-detail/merchandise-detail.module').then( m => m.MerchandiseDetailPageModule)
  },
  {
    path: 'merchandise-review',
    loadChildren: () => import('./merchandise-review/merchandise-review.module').then( m => m.MerchandiseReviewPageModule)
  },
  {
    path: 'news-and-reviews',
    loadChildren: () => import('./news-and-reviews/news-and-reviews.module').then( m => m.NewsAndReviewsPageModule)
  },
  {
    path: 'post-review',
    loadChildren: () => import('./post-review/post-review.module').then( m => m.PostReviewPageModule)
  },  
  {
    path: 'notifications',
    loadChildren: () => import('./../notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
