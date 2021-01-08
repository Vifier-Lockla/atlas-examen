import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import {Compte, LoginInformation} from '../model/UserProfil';

@Injectable()
export class LoginService {

  isLogged: boolean;
  loginInformation: LoginInformation;

  /**
   * Création d'un Subject avec Emitter
   */
  isLoggedSubject = new Subject<boolean>();
  emitIsLogged(): void {
    this.isLoggedSubject.next(this.isLogged);
  }

  constructor(private http: HttpClient) {
    this.isLogged = false;
    this.loginInformation = {id : null, pseudo: null, email: null};
  }

  getIsLogged(): boolean {
    return this.isLogged;
  }

  setLoginInformation(loginInformation: LoginInformation): void {
    this.loginInformation = loginInformation;
  }

  getLoginInformation(): LoginInformation {
    return this.loginInformation;
  }

  setIsLogged(logged: boolean): void {
    this.isLogged = logged;
    this.emitIsLogged();
  }

  /**
   * GET : Récupère le profile de l'utilisateur en cours
   */
  getProfilById(idCompte: number): Observable<Compte> {
    return this.http.get<Compte>(
      `/api/account/${idCompte}`
    );
  }

  /**
   * POST
   */
  postLogin(login: string, password: string): Observable<LoginInformation> {
    return this.http.post<LoginInformation>(
      '/api/login',
      {login, password}
      );
  }
}


