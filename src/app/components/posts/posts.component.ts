import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { PostsServiceService } from 'src/app/services/post/posts-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostsServiceService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postService.getPosts().pipe(take(1)).subscribe(
      posts => this.posts = posts
    )
  }

  deletePost(post: Post){
    this.postService.deletePost(post).pipe(take(1)).subscribe(
      resp => {
        this.posts = this.posts.filter( p => p.id !== post.id);
      }
    )

  }

}
