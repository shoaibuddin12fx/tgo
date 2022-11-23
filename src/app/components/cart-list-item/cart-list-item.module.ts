import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListItemComponent } from './cart-list-item.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CartListItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [CartListItemComponent],
})
export class CartListItemModule {}
