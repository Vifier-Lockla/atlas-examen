import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {LoginService} from '../services/login.service';
import {Compte, Telephone} from '../model/UserProfil';

@Component({
  selector: 'nvg-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  title = 'Vos informations personnelles';
  compte: Compte;

  constructor(private route: ActivatedRoute,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.compte = this.route.snapshot.data.profil;
  }

}
