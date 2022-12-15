import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CateringPageRoutingModule } from './catering-routing.module';

import { CateringPage } from './catering.page';
import { CateringContentModule } from './catering-content/catering-content.module';
import { CateringDropdownModule } from './catering-dropdown/catering-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CateringPageRoutingModule,
    CateringContentModule,
    CateringDropdownModule
  ],
  declarations: [CateringPage]
})
export class CateringPageModule {}
