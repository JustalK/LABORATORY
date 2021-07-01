import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Experience000001Component } from './experience000001/experience000001.component';
import { Experience000002Component } from './experience000002/experience000002.component';
import { Experience000003Component } from './experience000003/experience000003.component';
import { Experience000004Component } from './experience000004/experience000004.component';
import { Experience000005Component } from './experience000005/experience000005.component';
import { Experience000006Component } from './experience000006/experience000006.component';
import { Experience000007Component } from './experience000007/experience000007.component';
import { Experience000008Component } from './experience000008/experience000008.component';
import { Experience000009Component } from './experience000009/experience000009.component';

const routes: Routes = [
  { path: 'experience000001', component: Experience000001Component },
  { path: 'experience000002', component: Experience000002Component },
  { path: 'experience000003', component: Experience000003Component },
  { path: 'experience000004', component: Experience000004Component },
  { path: 'experience000005', component: Experience000005Component },
  { path: 'experience000006', component: Experience000006Component },
  { path: 'experience000007', component: Experience000007Component },
  { path: 'experience000008', component: Experience000008Component },
  { path: 'experience000009', component: Experience000009Component },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
