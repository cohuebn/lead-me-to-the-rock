import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostQuery } from './post-query.model';
import { AngularFireDatabase, AngularFireAction  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
    constructor(private db: AngularFireDatabase) {

    }

    // TODO - remove when this service is wired-up; testing long text
    private dummyPosts: Post[] = [
        { title: 'Mock Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed eros vehicula, scelerisque lacus sit amet, euismod felis. Mauris nisl ante, venenatis nec maximus eu, pharetra non eros. Sed at gravida justo. Proin justo lorem, vestibulum quis fermentum eu, bibendum in quam. Quisque ut tristique felis. Suspendisse molestie tempus orci, dictum feugiat odio consequat lacinia. Sed in accumsan massa, in tempus nibh. Quisque a lacus et nisi semper efficitur. Pellentesque sapien metus, cursus eu ultrices eu, dictum eu nisl. Nunc luctus velit non odio ullamcorper, eu feugiat tortor fermentum.' },
        { title: 'Mock Post 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed eros vehicula, scelerisque lacus sit amet, euismod felis. Mauris nisl ante, venenatis nec maximus eu, pharetra non eros. Sed at gravida justo. Proin justo lorem, vestibulum quis fermentum eu, bibendum in quam. Quisque ut tristique felis. Suspendisse molestie tempus orci, dictum feugiat odio consequat lacinia. Sed in accumsan massa, in tempus nibh. Quisque a lacus et nisi semper efficitur. Pellentesque sapien metus, cursus eu ultrices eu, dictum eu nisl. Nunc luctus velit non odio ullamcorper, eu feugiat tortor fermentum.' },
        { title: 'Mock Post 3', content: 'Short content tester' },
    ];

    getPosts(query: PostQuery) {
        return this.db.list<Post>('/posts').valueChanges();
    }
}