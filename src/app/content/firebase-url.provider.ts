import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';

@Injectable()
export class FirebaseUrlProvider {
    private urlCache: Map<string, string>;

    constructor(private fb: FirebaseApp) {
        this.urlCache = new Map<string, string>();
    }

    getUrl(relativePath: string) {
        if (typeof(relativePath) != 'string')
            return Promise.resolve(null);

        if (this.urlCache.has(relativePath))
            return Promise.resolve(this.urlCache.get(relativePath));

        const storageRef = this.fb.storage().ref().child(relativePath);
        return storageRef.getDownloadURL()
            .then(url => {
                this.urlCache.set(relativePath, url);
                return url;
            }); 
    }
}