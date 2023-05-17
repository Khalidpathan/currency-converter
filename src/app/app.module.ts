import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MenuModule} from 'primeng/menu';
import {InputTextModule} from 'primeng/inputtext';
import {StyleClassModule} from 'primeng/styleclass';
import { TabViewModule } from 'primeng/tabview';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    TabMenuModule,
    InputNumberModule,
    FormsModule,
    CascadeSelectModule,
    DropdownModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenuModule,
    InputTextModule,
    StyleClassModule,
    TabViewModule,
    ChartModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
