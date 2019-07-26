import {
  Post
} from '../shared/models/entity/Post';

export class MappingUtil {

  public static mapItemToPost(item: any): Post {
    const post: Post = new Post();

    post.id = item.id;
    post.title = item.title;
    post.body = item.body;

    return post;
  }
}
