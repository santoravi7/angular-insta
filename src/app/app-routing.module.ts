import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component'

const appRoutes:Routes =[
  {path :'', component :LoginComponent},
  {path :'home/:id', component :HomeComponent},
  {path :'signup', component :SignupComponent}
]


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}