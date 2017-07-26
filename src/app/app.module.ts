import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MyFormComponent } from './my-form/my-form.component';

import { MdInputModule, MD_DATE_FORMATS, DateAdapter, MdButtonModule, MdDatepickerModule } from '@angular/material'
import { MY_NATIVE_DATE_FORMATS } from 'app/constants';
import { AppDateAdapter } from 'app/AppDateAdapter';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdDatepickerModule,
    BrowserAnimationsModule
  ],
   providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MD_DATE_FORMATS, useValue: MY_NATIVE_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
