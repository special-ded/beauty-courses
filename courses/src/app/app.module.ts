import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ForMyselfComponent } from './pages/for-myself/for-myself.component';
import { ForVisagisteComponent } from './pages/for-visagiste/for-visagiste.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ForMyselfComponent,
    ForVisagisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
