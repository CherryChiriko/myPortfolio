import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({})
export class AppModule { }
export class SocialSharedModule{ static forRoot() {
  return {
    ngModule: AppModule,
    providers: []
  }
}}


