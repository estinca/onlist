import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/entity/Post';
import { PostService } from 'src/app/shared/service/post.service';

@Component({
  selector: 'est-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.postService.getPosts(0).subscribe(
      items => {
        this.posts = items;

      }
    );
  }

}
