import { test, expect } from '@playwright/test';
//import { Locators } from './archivo_locators.js';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Funcionalidad', () => {
    /** @type {LoginPage} */
    let pageObject;

    test.beforeEach(async ({ page }) => {
        pageObject = new LoginPage(page);
        await page.goto(Locators.page);
    });

    test('Caso de prueba', async () => {
        //Retomando
        
    });
});