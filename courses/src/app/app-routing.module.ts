import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForMyselfComponent } from './pages/for-myself/for-myself.component';
import { ForVisagisteComponent } from './pages/for-visagiste/for-visagiste.component';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
  },
  {
    path: 'for-myself',
    pathMatch: 'full',
    component: ForMyselfComponent,
  },
  {
    path: 'for-visagiste',
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
