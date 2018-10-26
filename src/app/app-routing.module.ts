import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

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
    path: 'registration',
    component: RegistrationComponent
  }
 
]


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

