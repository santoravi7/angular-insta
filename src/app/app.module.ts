import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UsersService } from './users.service';
import { MessageComponent } from './message/message.component';
import { MesageService } from './mesage.service';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MyOrderByPipe } from './shared/sort.pipe';
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    ModalModule.forRoot(),  
    NgbModule,
    ReactiveFormsModule
  ],
    
  declarations: [ 
    AppComponent, 
    LoginComponent, 
    HomeComponent, 
    SignupComponent, 
    MessageComponent,
    ModalContentComponent,
    MyOrderByPipe
  ],
  entryComponents: [
    ModalContentComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [UsersService, MesageService, InMemoryDataService,MyOrderByPipe]
})
export class AppModule { }
