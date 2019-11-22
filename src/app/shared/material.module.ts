import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    MatListModule
  ]
})
export class MaterialModule { }
