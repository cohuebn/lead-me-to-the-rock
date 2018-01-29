import { browser, by, element, ExpectedConditions, $ } from 'protractor';

describe('Navigation', () => {
    beforeEach(() => {
        browser.get('/');
        // browser.waitForAngularEnabled(false);
    });

    it('works! (sanity check)', () => {
        expect(true).toBe(true);
    })

    xit('can navigate between pages', () => {
        browser.wait(ExpectedConditions.presenceOf($('nav ul li a')))
        const aboutLink = $('nav ul li a');
        expect(aboutLink.isPresent()).toBe(true);     
        aboutLink.click();
        browser.wait(ExpectedConditions.presenceOf($('h2')));
        expect(element(by.cssContainingText('h2', 'About')).isPresent());
    })
});