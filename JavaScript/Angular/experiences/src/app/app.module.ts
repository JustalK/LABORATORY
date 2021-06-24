import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Experience000001Component } from './experience000001/experience000001.component';
import { NavComponent } from './nav/nav.component';
import { Experience000002Component } from './experience000002/experience000002.component';

@NgModule({
  declarations: [
    AppComponent,
    Experience000001Component,
    NavComponent,
    Experience000002Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
