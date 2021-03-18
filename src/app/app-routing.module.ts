import { HomeComponent } from './home/home.component';
import { RouteGuardService } from './service/route-guard.service';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { BookingsComponent } from './bookings/bookings.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [RouteGuardService]},
  {path: 'bookings/:name', component: BookingsComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
