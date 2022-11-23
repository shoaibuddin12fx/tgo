import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { CartListItemModule } from 'src/app/components/cart-list-item/cart-list-item.module';
// import { MenuListItemsModule } from 'src/app/components/menu-list-items/menu-list-items.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    CartListItemModule,
  ],
  declarations: [CartPage],
})
export class CartPageModule {}
