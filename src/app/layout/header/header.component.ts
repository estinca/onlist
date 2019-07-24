import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'est-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   showNavList = false;

  constructor() { }

  ngOnInit() {
  }

}
