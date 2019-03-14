import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppFilterPipe } from './app-filter.pipe';


import {InterfazComponent} from './interfaz/interfaz.component'


@NgModule({
  declarations: [
    AppComponent,
    AppFilterPipe,
    InterfazComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
