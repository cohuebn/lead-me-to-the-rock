import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../posts/post.service';
import { Post } from '../posts/post.model';

@Component({
    selector: 'section[home]',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    posts: Observable<Post[]>;

    constructor(private postService: PostService) {

    }

    ngOnInit() {
        this.posts = this.postService.getPosts({limit: 5});
    }
}