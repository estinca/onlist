import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/service/post.service';

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
