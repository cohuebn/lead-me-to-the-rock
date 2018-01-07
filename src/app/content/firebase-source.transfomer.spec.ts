import { FirebaseSourceTransformer } from "./firebase-source.transformer";
import { FirebaseUrlProvider } from "./firebase-url.provider";

describe('FirebaseSourceTransfomer', () => {
    let firebaseUrlProvider: FirebaseUrlProvider;
    let firebaseSourceTransfomer: FirebaseSourceTransformer;

    beforeEach(() => {
        firebaseUrlProvider = Object.assign(new FirebaseUrlProvider(null), {
            getUrl: (firebasePath) => Promise.resolve(`http://mapped/${firebasePath}`)
        });
        firebaseSourceTransfomer = new FirebaseSourceTransformer(firebaseUrlProvider);
    })

    it('handles null content', done => {
        firebaseSourceTransfomer.transformFBSrcAttributes(null)
            .then(result => expect(result).toBeNull())
            .then(done);
    });

    it('handles undefined content', done => {
        firebaseSourceTransfomer.transformFBSrcAttributes(undefined)
            .then(result => expect(result).toBeUndefined())
            .then(done);
    });

    it('handles content without any fbSrc attributes', done => {
        const input = '<div class="yep">I dont have any <i>fbSrc content</i></div>';

        firebaseSourceTransfomer.transformFBSrcAttributes(input)
            .then(result => expect(result).toEqual(input))
            .then(done);
    });

    it('handles replace all fbSrc attributes with mapped src attributes', done => {
        const input = '<div class="yep" fbSrc="the/fb/path">I have several <i fbSrc="another/fb/path?1234">fbSrc content</i></div>';

        firebaseSourceTransfomer.transformFBSrcAttributes(input)
            .then(result => {
                const expectedResult = '<div class="yep" src="http://mapped/the/fb/path">I have several <i src="http://mapped/another/fb/path?1234">fbSrc content</i></div>';
                expect(result).toEqual(expectedResult);
            })
            .then(done);
    });
});