import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { TopbarComponent } from './dashboard/topbar/topbar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from 'src/login/login.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    NoencontradoComponent
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
