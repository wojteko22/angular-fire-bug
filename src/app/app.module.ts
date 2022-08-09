import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from "@angular/fire/compat/database"; // todo: Source of error
import { AngularFireAuthModule } from "@angular/fire/compat/auth"; // todo: This is OK

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
