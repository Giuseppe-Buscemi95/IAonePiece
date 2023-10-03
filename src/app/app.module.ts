import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyPageComponent } from './body-page/body-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from  '@angular/material/card';
import { ListenerDirective } from './ListenerDirective';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyPageComponent,
    ListenerDirective,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
