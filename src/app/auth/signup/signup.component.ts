import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nvg-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title = 'Créer un compte';

  constructor() { }

  ngOnInit(): void {
  }

}
