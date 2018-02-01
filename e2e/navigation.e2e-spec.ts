import { browser, by, element } from 'protractor';

describe('Navigation', () => {
    beforeEach(async () => {
        await browser.get('/');
    });

    it('can navigate between pages', async () => {
        const aboutLink = await element(by.cssContainingText('nav ul li a', 'About')).click();
        const aboutHeader = element(by.tagName('h1')); 
        expect(await aboutHeader.getText()).toEqual('About');
    })
});