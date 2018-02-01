import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostsSchema } from './posts.schema';
import { PostQuery } from './post-query.model';
import { Observable } from 'rxjs/Observable';
import { FirebaseApp, FirebaseDatabase } from 'firebase-rxjs';
import { mergeMap } from 'rxjs/operators';
import { PostModelFactory } from './post-model.factory';

@Injectable()
export class PostService {
    private db: FirebaseDatabase<PostsSchema>;

    constructor(private fb: FirebaseApp, private postModelFactory: PostModelFactory) {
        this.db = fb.database<PostsSchema>();
    }

    getPosts(query: PostQuery) {
        return this.db.ref<Post[]>('/posts').onValue().list()
            .pipe(
                mergeMap(posts => {
                    const postPromises = posts.map(post => {
                        const values = post.val as object;
                        const rawData = { ...values, key: post.key };
                        return this.postModelFactory.create(rawData);
                    });
                    return Promise.all(postPromises);
                })
            );
    }

    getPost(key: string) {
        return this.db.ref<Post>(`/posts/${key}`).onValue().val()
            .pipe(
                mergeMap(post => {
                    const rawData = { ...post, key };
                    return this.postModelFactory.create(rawData);
                })
            );
    }
}