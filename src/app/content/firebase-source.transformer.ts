import { Injectable } from '@angular/core';
import { FirebaseUrlProvider } from './firebase-url.provider';

@Injectable()
export class FirebaseSourceTransformer {
    constructor(private firebaseUrlProvider: FirebaseUrlProvider) {

    }

    transformFBSrcAttributes(rawContent: string) {
        if (typeof(rawContent) !== 'string')
            return Promise.resolve(rawContent);
        
        const firebaseSourcePattern = /fbSrc="(.+?)"/gi;
        let firebaseSources = [], currentMatch;
        do {
            currentMatch = firebaseSourcePattern.exec(rawContent);
            if (currentMatch)
                firebaseSources.push({toReplace: currentMatch[0], fbSrc: currentMatch[1]});
        }
        while (currentMatch);

        const replacementMap = firebaseSources.map(x => {
            return this.firebaseUrlProvider.getUrl(x.fbSrc)
                .then(url => ({ toReplace: x.toReplace, replacement: `src="${url}"` }));
        });
        
        return Promise.all(replacementMap)
            .then(replacements => {
                return replacements.reduce((transformed, replacement) => {
                    return transformed.replace(replacement.toReplace, replacement.replacement)
                }, rawContent);
            })
    }
}