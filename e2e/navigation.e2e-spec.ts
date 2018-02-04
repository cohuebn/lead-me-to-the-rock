import { browser, by, element } from 'protractor';

describe('Navigation', () => {
    const header = element(by.tagName('h1')); 
    
    beforeEach(async () => {
        await browser.get('/');
    });

    it('can navigate between pages', async () => {
        await clickNavLinkExpectHeader('About');
        await clickNavLinkExpectHeader('Faith');
        await clickNavLinkExpectHeader('Finances');
        await clickNavLinkExpectHeader('Simple Living');
        await clickNavLinkExpectHeader('Recipes');

        await element(by.css('.logo')).click();
        expect(await(header.getText())).toEqual('Latest posts');
    })

    async function clickNavLinkExpectHeader(linkText: string, headerText?: string) {
        const navLink = await element(by.cssContainingText('nav ul li a', linkText)).click();
        expect(await header.getText()).toEqual(headerText || linkText);
    }
});