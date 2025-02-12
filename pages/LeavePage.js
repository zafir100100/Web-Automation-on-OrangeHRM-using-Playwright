const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

class LeavePage {
    constructor(page) {
        this.page = page;
        // Apply tab
        this.applyTabElement = page.getByRole('link', { name: 'Apply' });
        this.leaveTypeElement = page.locator('.oxd-select-text-input');
        this.leaveTypeOptionElement = page.getByRole('option', { name: 'CAN - Personal' });
        this.leaveFromElement = page.locator('form i').nth(2);
        this.leaveFromDayElement = page.getByText('27');
        this.leaveToElement = page.locator('form i').nth(3);
        this.leaveToDayElement = page.getByText('28');
        this.partialDaysElement = page.locator('form i').nth(4);
        this.partialDaysOptionElement = page.getByRole('option', { name: 'All Days' });
        this.durationElement = page.locator('form i').nth(5);
        this.durationOptionElement = page.getByRole('option', { name: 'Half Day - Morning' });
        this.commentsElement = page.locator('textarea');
        this.applyForLeaveButton = page.getByRole('button', { name: 'Apply' });
    }

    gotoApplyLeaveTab = async () => {
        await this.applyTabElement.click();
        await expect(this.page.getByText("Apply Leave")).toBeVisible();
    }

    applyLeave = async () => {
        await this.leaveTypeElement.click();
        await this.leaveTypeOptionElement.click();
        await this.leaveFromElement.click();
        await this.leaveFromDayElement.click();
        await this.leaveToElement.click();
        await this.leaveToDayElement.click();
        await this.partialDaysElement.click();
        await this.partialDaysOptionElement.click();
        await this.durationElement.click();
        await this.durationOptionElement.click();
        await this.commentsElement.fill(faker.lorem.sentences(2));
        // doing right click here, because left click will apply for leave and will deduct from entitled leave
        await this.applyForLeaveButton.click({
            button: 'right'
        });
    }
}

module.exports = LeavePage;
