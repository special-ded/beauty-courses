import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionsComponent } from './pages/conditions/conditions.component';
import { ForVisagisteComponent } from './pages/for-visagiste/for-visagiste.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ForVisagisteComponent,
  },
  {
    path: 'confidential-policy',
    pathMatch: 'full',
    component: PolicyComponent,
  },
  {
    path: 'payment',
    pathMatch: 'full',
    component: PaymentComponent,
  },
  {
    path: 'conditions',
    pathMatch: 'full',
    component: ConditionsComponent,
  },
  {
    path: 'registration',
    pathMatch: 'full',
    component: RegistrationComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
