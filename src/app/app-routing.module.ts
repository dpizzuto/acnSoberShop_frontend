import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:"/login",
    pathMatch:'full'
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "detail-product",
    component: DetailProductComponent
  }
 
 
]


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

