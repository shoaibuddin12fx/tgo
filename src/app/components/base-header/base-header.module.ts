import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHeaderComponent } from './base-header.component';

@NgModule({
  declarations: [BaseHeaderComponent],
  imports: [CommonModule],
  exports: [BaseHeaderComponent],
})
export class BaseHeaderModule {}
