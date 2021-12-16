import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { GiftComponent } from './components/gift/gift.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './modules/material/material.module';
import { ConfigModule } from './modules/config/config.module';
import { MapPageComponent } from './pages/map-page/map-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapPageComponent,
    LayoutComponent,
    GiftComponent,
    HomeComponent
  ],
  imports: [
    ConfigModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
