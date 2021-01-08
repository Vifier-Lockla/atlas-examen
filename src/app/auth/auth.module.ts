import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {PhoneComponent} from './commun/phone/phone.component';
import {EmailComponent} from './commun/email/email.component';
import {AddressComponent} from './commun/address/address.component';
import {ProfilComponent} from './profil/profil.component';
import {AuthGuard} from './services/authGuard';
import {LoginService} from './services/login.service';
import {ProfilResolver} from './services/profil.resolver';
import {ReactiveFormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PhoneComponent,
    ProfilComponent,
    EmailComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    StoreModule.forFeature(
      fromAuth.authFeatureKey,
      fromAuth.authReducer,
      )
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        LoginService,
        AuthGuard,
        ProfilResolver
      ]
    };
  }
}
