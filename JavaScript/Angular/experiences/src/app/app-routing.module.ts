import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Experience000001Component } from './experience000001/experience000001.component';

const routes: Routes = [
  { path: 'experience000001', component: Experience000001Component },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
