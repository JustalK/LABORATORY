import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Experience000001Component } from './experience000001/experience000001.component';
import { Experience000002Component } from './experience000002/experience000002.component';
import { Experience000003Component } from './experience000003/experience000003.component';
import { Experience000004Component } from './experience000004/experience000004.component';

const routes: Routes = [
  { path: 'experience000001', component: Experience000001Component },
  { path: 'experience000002', component: Experience000002Component },
  { path: 'experience000003', component: Experience000003Component },
  { path: 'experience000004', component: Experience000004Component },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
