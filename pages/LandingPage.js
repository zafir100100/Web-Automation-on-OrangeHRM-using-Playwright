const { expect } = require('@playwright/test');

class LandingPage {
    constructor(page) {
        this.page = page;
        this.landingPageUrl = process.env.LANDING_PAGE_URL;
        this.userNameElement = page.getByPlaceholder("Username");
        this.passwordElement = page.getByPlaceholder("Password");
        this.loginButtonElement = page.getByRole("button", { name: "Login" });
    }

    gotoLandingPage = async () => {
        await this.page.goto(this.landingPageUrl);
        await expect(this.page).toHaveTitle(/OrangeHRM/);
    }

    doLogin = async (userName, password) => {
        await this.userNameElement.fill(userName);
        await this.passwordElement.fill(password);
        await this.loginButtonElement.click();
        await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    }
}

module.exports = LandingPage;
