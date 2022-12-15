import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CateringContentComponent } from './catering-content.component';
import { IonicModule } from '@ionic/angular';
import { CateringDropdownModule } from '../catering-dropdown/catering-dropdown.module';



@NgModule({
  declarations: [CateringContentComponent],
  imports: [
    CommonModule,IonicModule, CateringDropdownModule
  ],exports:[CateringContentComponent]
})
export class CateringContentModule { }
