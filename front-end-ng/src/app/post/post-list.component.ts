import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import { Post } from './post';
import { PostService } from './post_service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostListComponent implements OnInit {
	//posts: Post[];

  public posts = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
  	let timer$ = timer(0, 5000);
  	timer$.subscribe(() => this.getPosts());
  }

  getPosts() {
  	this.postService.getPosts('http://localhost3000/posts')
  		.subscribe(posts => this.posts = posts);
  }
}
