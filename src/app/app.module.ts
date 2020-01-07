import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';   
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PersonlistComponent } from './personlist/personlist.component';
import { PersondetailsComponent } from './persondetails/persondetails.component';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { QueryComponent } from './query/query.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonlistComponent,
    PersondetailsComponent,
    MainComponent,
    FilterPipe,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,TableModule,HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
