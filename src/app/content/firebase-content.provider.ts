import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FirebaseContentProvider {
    constructor(private httpClient: HttpClient) {

    }

    getContents(url: string) {
        return this.httpClient.get(url, { responseType: 'text' });
    }
}