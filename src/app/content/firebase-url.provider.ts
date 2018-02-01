import { Injectable, NgZone } from '@angular/core';
import { FirebaseApp } from 'firebase-rxjs';
import 'firebase/storage';

@Injectable()
export class FirebaseUrlProvider {
    private urlCache: Map<string, string>;

    constructor(private fb: FirebaseApp, private zone: NgZone) {
        this.urlCache = new Map<string, string>();
    }

    getUrl(firebasePath: string) : any {
        if (typeof(firebasePath) != 'string')
            return Promise.resolve(null);

        if (this.urlCache.has(firebasePath))
            return Promise.resolve(this.urlCache.get(firebasePath));

        return new Promise(resolve => {
            // run outside angular so that long-running firebase connections don't affect rest of app (and protractor)
            this.zone.runOutsideAngular(() => {
                const storageRef = this.fb.nativeApp.storage().ref().child(firebasePath);
                storageRef.getDownloadURL()
                    .then(url => {
                        this.urlCache.set(firebasePath, url);
                        this.zone.run(() => resolve(url));
                    });        
            });
        });
    }
}