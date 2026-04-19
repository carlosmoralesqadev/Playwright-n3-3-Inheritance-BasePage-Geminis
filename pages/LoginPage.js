import { Locators } from "../data/testData.js"

import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page);
    
        this.inputName = page.getByRole("textbox", { name : Locators.seccion.login.inputName });
        this.inputPass = page.getByRole("textbox", { name : Locators.seccion.login.inputPass });
        this.userName  = Locators.seccion.login.userName;
        this.userPass  = Locators.seccion.login.userPass;
        this.btnLogin  = page.getByRole("button", { name : Locators.seccion.login.btnLogin});
        this.productsTitle = page.getByTestId(Locators.seccion.Products.productsTitle)
    }

    hacerLogin() {
        await this.inputName.fill(this.userName);
        await this.inputPass.fill(this.userPass);
        await this.btnLogin.click();
        await expect(this.productsTitle).toBeVisible()
        await expect(this.btnLogin).not.toBeVisible()
    }



}