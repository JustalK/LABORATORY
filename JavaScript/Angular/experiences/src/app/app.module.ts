import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Experience000001Component } from './experience000001/experience000001.component';
import { NavComponent } from './nav/nav.component';
import { Experience000002Component } from './experience000002/experience000002.component';

import { Experience000003Component } from './experience000003/experience000003.component';
import Experience000003ParentComponent from './experience000003/parent/parent.component';
import Experience000003ChildrenComponent from './experience000003/children/children.component';


import { Experience000004Component } from './experience000004/experience000004.component';
import Experience000004ParentComponent from './experience000004/parent/parent.component';
import Experience000004ChildrenComponent from './experience000004/children/children.component';

@NgModule({
  declarations: [
    AppComponent,
    Experience000001Component,
    NavComponent,
    Experience000002Component,
    Experience000003Component,
    Experience000003ParentComponent,
    Experience000003ChildrenComponent,
    Experience000004Component,
    Experience000004ParentComponent,
    Experience000004ChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
