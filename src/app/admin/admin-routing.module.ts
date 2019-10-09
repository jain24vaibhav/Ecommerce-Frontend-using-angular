import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductComponent } from './product/product.component';
import { DepartmentComponent } from './department/department.component';


const routes: Routes = [
  {path:'', children:[
    { path:'', component:AdminComponent},
    { path:'product', component:ProductComponent},
    { path:'department', component:DepartmentComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
