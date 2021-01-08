import {Component, Input, OnInit} from '@angular/core';
import {Adresse} from '../../model/UserProfil';

@Component({
  selector: 'nvg-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input()
  addressList: Adresse[];

  constructor() { }

  ngOnInit(): void {
  }

}
