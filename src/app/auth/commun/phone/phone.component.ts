import {Component, Input, OnInit} from '@angular/core';
import {Telephone} from "../../model/UserProfil";

@Component({
  selector: 'nvg-telephone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  @Input()
  phonelist: Telephone[];

  constructor() { }

  ngOnInit(): void {
  }

}
