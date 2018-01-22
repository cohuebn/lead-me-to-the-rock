import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostQuery } from './post-query.model';
import { AngularFireDatabase, AngularFireAction  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';
import { PostModelFactory } from './post-model.factory';

@Injectable()
export class PostService {
    constructor(private db: AngularFireDatabase, private postModelFactory: PostModelFactory) {

    }

    getPosts(query: PostQuery) {
        return this.db.list('/posts')
            .snapshotChanges()
            .pipe(
                mergeMap(actions => {
                    const postPromises = actions.map(c => {
                        const rawData = { key: c.payload.key, ...c.payload.val() };
                        return this.postModelFactory.create(rawData);
                    });
                    return Promise.all(postPromises);
                })
            );
    }

    getPost(key: string) {
        return this.db.object(`/posts/${key}`)
            .valueChanges()
            .pipe(
                mergeMap(x => this.postModelFactory.create(x))
            );
    }
}