import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  { path:'sample', loadChildren: () => import('./sample/sample.module').then(m => m.SampleModule)},
  { path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path:"**", pathMatch:'full' ,component:HomeComponent},
  {path:'', pathMatch:'full' , component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
