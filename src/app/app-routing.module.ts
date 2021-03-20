import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroDetailloginComponent} from './hero-detaillogin/hero-detaillogin.component';
import { AuthGuard } from './auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: HeroDetailloginComponent },
  { path: 'checkout', component:CheckoutComponent },
  { path: 'dashboard',component: DashboardComponent,canActivate:[AuthGuard]},
  { path: 'detail/:id' ,component: HeroDetailComponent,canActivate:[AuthGuard]},
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
