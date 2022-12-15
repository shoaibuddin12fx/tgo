import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateReviewComponent } from './create-review.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CreateReviewComponent],
  imports: [
    CommonModule,IonicModule
  ],exports:[CreateReviewComponent]
})
export class CreateReviewModule { }
