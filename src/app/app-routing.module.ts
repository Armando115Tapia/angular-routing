import { SubCComponent } from './comp-a/sub-c/sub-c.component';
import { SubBComponent } from './comp-a/sub-b/sub-b.component';
import { SubAComponent } from './comp-a/sub-a/sub-a.component';
import { CompCComponent } from './comp-c/comp-c.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// url-> compa/suba
const routes: Routes = [
    {path: 'compa', component: CompAComponent, children: [
      {path: 'suba', component: SubAComponent},
      {path: 'subb', component: SubBComponent},
      {path: 'subc', component: SubCComponent}
    ]},
  {path: 'compb', component: CompBComponent},
  {path: 'compc', component: CompCComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
