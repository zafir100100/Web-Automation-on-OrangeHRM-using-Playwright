require('dotenv').config();
const { test } = require('@playwright/test');
const LandingPage = require('../pages/LandingPage');
const DashboardPage = require('../pages/DashboardPage');
const LeavePage = require('../pages/LeavePage');

test('Regression test on OrangeHRM', async ({ page }) => {
    const landingPage = new LandingPage(page);
    await landingPage.gotoLandingPage();
    await landingPage.doLogin(process.env.LOGIN_USERNAME, process.env.LOGIN_PASSWORD);
    const dashboardPage = new DashboardPage(page);
    // Note: leave page is not always displayed
    await dashboardPage.gotoLeavePage();
    const leavePage = new LeavePage(page);
    await leavePage.gotoApplyLeaveTab();
    await leavePage.applyLeave();
});