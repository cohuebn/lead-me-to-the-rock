import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';

@Injectable()
export class FirebaseUrlProvider {
    private urlCache: Map<string, string>;

    constructor(private fb: FirebaseApp) {
        this.urlCache = new Map<string, string>();
    }

    getUrl(firebasePath: string) {
        if (typeof(firebasePath) != 'string')
            return Promise.resolve(null);

        if (this.urlCache.has(firebasePath))
            return Promise.resolve(this.urlCache.get(firebasePath));

        const storageRef = this.fb.storage().ref().child(firebasePath);
        return storageRef.getDownloadURL()
            .then(url => {
                this.urlCache.set(firebasePath, url);
                return url;
            }); 
    }
}