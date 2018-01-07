import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirebaseSourceTransformer } from './firebase-source.transformer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class FirebaseContentProvider {
    private contentCache: Map<string, string>;

    constructor(private httpClient: HttpClient, private firebaseSourceTransformer: FirebaseSourceTransformer) {
        this.contentCache = new Map<string, string>();
    }

    getContents(url: string) {
        if (this.contentCache.has(url))
            return Observable.of(this.contentCache.get(url));

        return this.httpClient.get(url, { responseType: 'text' })
            .flatMap(x => this.firebaseSourceTransformer.transformFBSrcAttributes(x))
            .map(x => {
                this.contentCache.set(url, x);
                return x;
            });
    }
}