import { CompCComponent } from './comp-c/comp-c.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'compa', component: CompAComponent},
  {path: 'compb', component: CompBComponent},
  {path: 'compc', component: CompCComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
