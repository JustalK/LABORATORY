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
import { Experience000010Component } from './experience000010/experience000010.component';
import { Experience000011Component } from './experience000011/experience000011.component';
import { Experience000012Component } from './experience000012/experience000012.component';
import { Experience000013Component } from './experience000013/experience000013.component';
import { Experience000014Component } from './experience000014/experience000014.component';

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
  { path: 'experience000010', component: Experience000010Component },
  { path: 'experience000011', component: Experience000011Component },
  { path: 'experience000012', component: Experience000012Component },
  { path: 'experience000013', component: Experience000013Component },
  { path: 'experience000014', component: Experience000014Component },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
