import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDetailsPageRoutingModule } from './menu-details-routing.module';

import { MenuDetailsPage } from './menu-details.page';
import { MenuListItemsModule } from 'src/app/components/menu-list-items/menu-list-items.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDetailsPageRoutingModule,
    MenuListItemsModule,
  ],
  declarations: [MenuDetailsPage],
})
export class MenuDetailsPageModule {}
