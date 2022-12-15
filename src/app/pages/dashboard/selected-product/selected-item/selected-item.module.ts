import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedItemComponent } from './selected-item.component';
import { IonicModule, IonModal } from '@ionic/angular';



@NgModule({
  declarations: [SelectedItemComponent],
  imports: [
    CommonModule,IonicModule
  ],exports:[SelectedItemComponent]
})
export class SelectedItemModule { }
