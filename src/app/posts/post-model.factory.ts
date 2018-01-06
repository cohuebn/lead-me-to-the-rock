import { Injectable } from '@angular/core';
import { FirebaseUrlProvider } from '../content/firebase-url.provider';
import { Post } from './post.model';

@Injectable()
export class PostModelFactory {
    constructor(private firebaseUrlProvider: FirebaseUrlProvider) {
    }

    create(source: any) : Promise<Post> {
        let post = Object.assign(new Post(), source);
        
        return Promise.all([
            this.firebaseUrlProvider.getUrl(source.thumbnailLocation),
            this.firebaseUrlProvider.getUrl(source.contentLocation)
        ])
        .then(([thumbnailUrl, contentUrl]) => {
            return Object.assign(post, { thumbnailUrl, contentUrl });
        });
    }
}