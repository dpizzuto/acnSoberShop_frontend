import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
//import { CustomMaterialModule } from './core/material.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { routing } from './app-routing.module';
import { UserLoginService } from './service/user-login.service';
import { DetailProductComponent } from './detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //CustomMaterialModule,
    FormsModule,
    routing,
    
    
  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }