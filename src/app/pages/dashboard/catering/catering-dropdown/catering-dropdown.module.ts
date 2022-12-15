import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CateringDropdownComponent } from './catering-dropdown.component';



@NgModule({
  declarations: [CateringDropdownComponent],
  imports: [
    CommonModule
  ],exports:[CateringDropdownComponent]
})
export class CateringDropdownModule { }
