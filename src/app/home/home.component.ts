import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nvg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'ATLAS-IHM';

  constructor() { }

  ngOnInit(): void {
  }

}
