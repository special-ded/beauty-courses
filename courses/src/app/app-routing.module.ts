import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForVisagisteComponent } from './pages/for-visagiste/for-visagiste.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ForVisagisteComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
