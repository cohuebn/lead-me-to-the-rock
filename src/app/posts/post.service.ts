import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostQuery } from './post-query.model';
import { AngularFireDatabase, AngularFireAction  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import { PostModelFactory } from './post-model.factory';

@Injectable()
export class PostService {
    constructor(private db: AngularFireDatabase, private postModelFactory: PostModelFactory) {

    }

    getPosts(query: PostQuery) {
        return this.db.list('/posts')
            .valueChanges()
            .flatMap(sourcePosts => {
                return Promise.all(sourcePosts.map(x => this.postModelFactory.create(x)));
            });
    }
}