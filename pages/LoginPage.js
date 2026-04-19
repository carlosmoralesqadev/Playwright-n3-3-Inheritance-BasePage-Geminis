import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page);
        //this.elemento = page.locator('selector');
    }

}