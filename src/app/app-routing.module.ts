import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilResolver} from './auth/services/profil.resolver';
import {ProfilComponent} from './auth/profil/profil.component';
import {AuthGuard} from './auth/services/authGuard';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'profil/:id',
    canActivate: [AuthGuard],
    component: ProfilComponent,
    resolve: {
      profil: ProfilResolver
    }
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
