import { NgModule } from '@angular/core';
import { MatListModule, MatCardModule, MatTabsModule } from '@angular/material';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    MatListModule,
    MatCardModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
