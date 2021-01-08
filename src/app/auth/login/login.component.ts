import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {noop} from 'rxjs';
import {LoginService} from '../services/login.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {login} from '../auth.actions';

@Component({
  selector: 'nvg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Se connecter';
  form: FormGroup;

  errorMessage: string;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              private store: Store<AppState>) {

    this.form = fb.group({
      pseudo_or_email: ['Peter', [Validators.required]],
      password: ['@P3t3r#', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }


  /**
   * Appui sur le bouton [Login]
   */
  login(): void {
    // Get form value
    const val = this.form.value;

    this.loginService.postLogin(val.pseudo_or_email, val.password)
      .pipe(
        tap(loginInformation => {
          if (loginInformation.id !== null) {
            this.store.dispatch(login({user: loginInformation}));
            this.loginService.setLoginInformation(loginInformation);
            this.loginService.setIsLogged(true);
            this.router.navigateByUrl('/home');
          }
          else {
            alert('Le couple login / mot de passe est erroné !');
          }
        })
      )
      .subscribe(
        noop,
        err => {
          this.errorMessage = err.error.code + ' - ' + err.error.text;
          console.log(this.errorMessage);
        }
      );
  }
}
