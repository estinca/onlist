import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { MappingUtil } from 'src/app/utils/mapping.util';
import { Post } from '../models/entity/Post';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private restService: RestService) { }

  public getPosts(page: number, pageSize: number = 50): Observable<any> {

    if(pageSize <= 0) {
      pageSize = Number.MAX_SAFE_INTEGER;
    }

    return this.restService.get('/posts.json', null).pipe(
      map( res => {
        const posts: Post[] = [];

        for(const post of res) {
          posts.push(MappingUtil.mapItemToPost(post));
        }

        return posts;
      })
    );

  }

}
