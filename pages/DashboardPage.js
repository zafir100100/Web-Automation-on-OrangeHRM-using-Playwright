const { expect } = require('@playwright/test');

class DashboardPage {
    constructor(page) {
        this.page = page;
        this.leaveElement = page.getByRole('link', { name: 'Leave' });
    }

    gotoLeavePage = async () => {
        await this.leaveElement.click();
        await expect(this.page.getByRole('heading', { name: 'Leave', exact: true })).toBeVisible();
    }
}

module.exports = DashboardPage;
