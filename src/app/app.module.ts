import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Cấu hình routing
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './Modules/home/login/login.component';
import { RegisterComponent } from './Modules/home/register/register.component';
import { HomePageComponent } from './Modules/home/home-page/home-page.component';
import { HeaderComponent } from './Modules/home/home-template/header/header.component';

const appRoutes:Routes = [

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomePageComponent},
  {path:'',component:HomePageComponent}
]

@NgModule({
  declarations: [
    AppComponent, HeaderComponent
  ],
  imports: [
    // Router module này sẽ điều hướng cho thẻ <router-outlet></router-outlet> tại app component
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
