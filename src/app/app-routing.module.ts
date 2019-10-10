import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  { path : 'list/:id', component:ListComponent},
  { path: 'user', component:UserComponent},
  { path : 'detail/:id', component:ProductDetailComponent},
  { path : 'checkout', component:CheckoutComponent},
  { path: 'cart', component:CartComponent},
  { path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path:"**", pathMatch:'full' ,component:HomeComponent},
  {path:'', pathMatch:'full' , component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
