const { When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");

const { AddFooter } = require("../pageObjects/AddFooter");
const addFooter = new AddFooter();

When('user {string} adds a new footer with following details:',async function (user, details) {
    await addFooter.navigateToFooterSection();
    const { description, address, contactNo } = details.hashes()[0];
    await addFooter.enterFooterDetails(description, address, contactNo);
});

Then('the footer description {string} should show up in store website',async function (footerDesc) {
    await page.goto("http://127.0.0.1:3000/");
    await expect(page.locator(addFooter.checkFooterDescSelector)).toHaveText(footerDesc);
});
