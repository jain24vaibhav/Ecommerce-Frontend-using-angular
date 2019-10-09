import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { SampleComponent } from './sample.component';


const routes: Routes = [
  {path:'', children:[
    { path:'', component:SampleComponent},
    {path:'child1', component:Child1Component}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SampleRoutingModule { }
