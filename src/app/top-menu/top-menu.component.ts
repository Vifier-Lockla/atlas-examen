import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../auth/services/login.service';
import {Compte, LoginInformation} from '../auth/model/UserProfil';
import {of, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../reducers';
import { logout } from '../auth/auth.actions';

@Component({
  selector: 'nvg-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  title = 'Atlas Examen';
  loginInformation: LoginInformation;
  logged: boolean;


  // Souscription au changement d'état de loginService.isLogged
  isLoggedSubscription: Subscription;

  constructor(private router: Router,
              private loginService: LoginService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.isLoggedSubscription = this.loginService.isLoggedSubject.subscribe(
      (isLogged: boolean) => {
        this.logged = isLogged;
        this.loginInformation = this.loginService.getLoginInformation();
      }
    );
    this.loginService.emitIsLogged();
  }

  login(): void {
    this.router.navigateByUrl('/login');
  }

  signup(): void {
    this.router.navigateByUrl('/signup');
  }

  logout(): void {
    this.router.navigateByUrl('/home');
    this.loginService.setIsLogged(false);
    this.store.dispatch(logout());
    this.loginInformation = undefined;
    this.loginService.setIsLogged(this.logged);
  }

  toHome(): void {
    this.router.navigateByUrl('/home');
  }
}
