import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirebaseSourceTransformer } from './firebase-source.transformer';
import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class FirebaseContentProvider {
    private contentCache: Map<string, string>;

    constructor(private httpClient: HttpClient, private firebaseSourceTransformer: FirebaseSourceTransformer) {
        this.contentCache = new Map<string, string>();
    }

    getContents(url: string) {
        if (this.contentCache.has(url))
            return of(this.contentCache.get(url));

        return this.httpClient.get(url, { responseType: 'text' })
            .pipe(
                mergeMap(x => this.firebaseSourceTransformer.transformFBSrcAttributes(x)),
                map(x => {
                    this.contentCache.set(url, x);
                    return x;
                })
            );
    }
}