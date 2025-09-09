import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from './menu/menu';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Menu
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    Menu
  ]
})
export class LayoutModule { }
