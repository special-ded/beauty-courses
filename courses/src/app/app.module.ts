import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForVisagisteComponent } from './pages/for-visagiste/for-visagiste.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './pages/payment/payment.component';
import { ConditionsComponent } from './pages/conditions/conditions.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { RegistrationComponent } from './pages/registration/registration.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, ForVisagisteComponent, PaymentComponent, ConditionsComponent, PolicyComponent, RegistrationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCarouselModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
