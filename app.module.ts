import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { FormsModule } from '@angular/forms';
import { FirstsiblingComponent } from './firstsibling/firstsibling.component';
import { SecondsiblingComponent } from './secondsibling/secondsibling.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    FirstsiblingComponent,
    SecondsiblingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
