import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nvg-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = 'A propos';

  constructor() { }

  ngOnInit(): void {
  }

}
