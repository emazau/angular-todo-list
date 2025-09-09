import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { AppRoutingModule } from "./app-routing-module";
import { LayoutModule } from './todo/layout/layout-module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,AppRoutingModule, LayoutModule, CommonModule, FormsModule, ReactiveFormsModule], 
  providers: [ 
        provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
