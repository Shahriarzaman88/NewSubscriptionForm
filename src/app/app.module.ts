import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import {HttpClientModule} from '@angular/common/http'
import {HttpService}  from './subscription-form/post.service'


@NgModule({
  declarations: [
    AppComponent,
    SubscriptionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
