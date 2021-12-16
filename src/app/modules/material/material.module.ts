import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatBadgeModule,
    MatButtonModule,
  ],

  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
