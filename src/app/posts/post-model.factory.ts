import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { Post } from './post.model';

@Injectable()
export class PostModelFactory {
    constructor(private fb: FirebaseApp) {

    }

    create(source: any) : Promise<Post> {
        let post = Object.assign(new Post(), source);
        if (!source.imageLocation)
            return Promise.resolve(post);
        
        const storageRef = this.fb.storage().ref().child(source.imageLocation);
        return storageRef.getDownloadURL()
            .then(imageUrl => {
                console.log(imageUrl);
                return Object.assign(post, { imageUrl });
            });
    }
}