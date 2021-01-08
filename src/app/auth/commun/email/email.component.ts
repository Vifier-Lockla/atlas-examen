import {Component, Input, OnInit} from '@angular/core';
import {Email} from '../../model/UserProfil';

@Component({
  selector: 'nvg-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  @Input()
  emailList: Email[];

  constructor() { }

  ngOnInit(): void {
  }

}
