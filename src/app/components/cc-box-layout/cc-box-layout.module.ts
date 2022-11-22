import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CcBoxLayoutComponent } from './cc-box-layout.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CcBoxLayoutComponent],
  imports: [CommonModule, IonicModule],
  exports: [CcBoxLayoutComponent],
})
export class CcBoxLayoutModule {}
