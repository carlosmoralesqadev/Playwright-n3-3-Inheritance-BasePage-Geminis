import { expect } from '@playwright/test';
import { Locators } from "../../data/testData.js"

export class BasePage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
    }

    async navegar() {
        await this.page.goto(Locators.url);
    }

    async esperar(ms) {
        await this.page.waitForTimeout(ms)
    }

}