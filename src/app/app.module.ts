import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Cấu hình routing
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './Modules/home/login/login.component';
import { RegisterComponent } from './Modules/home/register/register.component';
import { HomePageComponent } from './Modules/home/home-page/home-page.component';
import { HeaderComponent } from './Modules/home/home-template/header/header.component';
import { HomeModule } from './Modules/home/home.module';
import { UserModule } from './Modules/user/user.module';
// Thư viện gọi api
import {HttpClientModule} from '@angular/common/http'
import { CourseService } from './_core/services/course.service';

const appRoutes:Routes = [

  // {path:'login',component:LoginComponent},
  {path:'user',loadChildren: () => UserModule},
  {path:'home', loadChildren:() => HomeModule},
  {path:'',component:HomePageComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Router module này sẽ điều hướng cho thẻ <router-outlet></router-outlet> tại app component
    BrowserModule,RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [CourseService], //provider là nơi import các service sử dụng cho module đó
  bootstrap: [AppComponent]
})
export class AppModule { }
