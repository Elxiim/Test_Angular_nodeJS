import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './user/list-user/list-user.component';

import {HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { WebRequestService } from './web-request.service';
@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    WebRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

