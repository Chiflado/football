import { NgModule } from '@angular/core';
import { MatListModule, MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
