require('dotenv').config()
const { test } = require('@playwright/test');
const LandingPage = require('../pages/LandingPage');

test('Regression test on OrangeHRM', async ({ page }) => {
    const landingPage = new LandingPage(page);
    await landingPage.gotoLandingPage();
    await landingPage.doLogin(process.env.LOGIN_USERNAME, process.env.LOGIN_PASSWORD);
});