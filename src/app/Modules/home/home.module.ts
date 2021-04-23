import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { HeaderComponent } from './home-template/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    HomeTemplateComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class HomeModule { }
