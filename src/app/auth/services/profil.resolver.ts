import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {LoginService} from './login.service';
import {Compte} from '../model/UserProfil';

@Injectable()
export class ProfilResolver implements Resolve<Compte> {

  constructor(private loginService: LoginService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Compte> {
    return this.loginService.getProfilById(route.params.id);
  }

}

