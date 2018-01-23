import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { PostQuery } from './post-query.model';
import { PostService } from './post.service';

@Component({
    selector: 'post-previews',
    templateUrl: './post-previews.component.html'
})
export class PostPreviewsComponent implements OnInit {
    @Input() query: PostQuery = {};
    posts: Observable<Post[]>;

    constructor(private postService: PostService) {

    }

    ngOnInit(): void {
        this.posts = this.postService.getPosts(this.query);
    }
}