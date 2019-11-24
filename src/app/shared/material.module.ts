import { NgModule } from '@angular/core';
import { MatListModule, MatCardModule, MatTabsModule, MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class MaterialModule { }
