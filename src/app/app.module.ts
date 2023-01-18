import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocialSharedModule } from 'projects/social/src/app/app.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        SocialSharedModule.forRoot(),        
    ]
})
export class AppModule { }
