import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
