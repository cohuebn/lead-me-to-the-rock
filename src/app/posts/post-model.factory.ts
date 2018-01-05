import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { Post } from './post.model';

@Injectable()
export class PostModelFactory {
    private urlCache: Map<string, string>;

    constructor(private fb: FirebaseApp) {
        this.urlCache = new Map<string, string>();
    }

    create(source: any) : Promise<Post> {
        let post = Object.assign(new Post(), source);
        if (!source.imageLocation)
            return Promise.resolve(post);
        
        return this.convertToUrl(source.imageLocation)
            .then(imageUrl => (Object.assign(post, { imageUrl })));
    }

    private convertToUrl(imageLocation: string) {
        if (this.urlCache.has(imageLocation))
            return Promise.resolve(this.urlCache.get(imageLocation));

        const storageRef = this.fb.storage().ref().child(imageLocation);
        return storageRef.getDownloadURL()
            .then(url => {
                this.urlCache.set(imageLocation, url);
                return url;
            }); 
    }
}