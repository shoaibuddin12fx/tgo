import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadChildren: () =>
      import('./splash/splash.module').then((m) => m.SplashPageModule),
  },

  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },

  {
    path: 'pre-login',
    loadChildren: () =>
      import('./pre-login/pre-login.module').then((m) => m.PreLoginPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'menu-details',
    loadChildren: () => import('./menu-details/menu-details.module').then( m => m.MenuDetailsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'products-list',
    loadChildren: () => import('./dashboard/products-list/products-list.module').then( m => m.ProductsListPageModule)
  },
  {
    path: 'selected-product',
    loadChildren: () => import('./dashboard/selected-product/selected-product.module').then( m => m.SelectedProductPageModule)
  },
  {
    path: 'reviews-list',
    loadChildren: () => import('./dashboard/reviews-list/reviews-list.module').then( m => m.ReviewsListPageModule)
  },
{
    path: 'news-reviews',
    loadChildren: () => import('./dashboard/news-reviews/news-reviews.module').then( m => m.NewsReviewsPageModule)
  },
  {
    path: 'catering',
    loadChildren: () => import('./dashboard/catering/catering.module').then( m => m.CateringPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
