const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");

const { AddFooter } = require("../pageObjects/AddFooter");
const addFooter = new AddFooter();

Given('the footer section fields have been cleaned up',async function () {
    await addFooter.navigateToFooterSection();
    await addFooter.cleanupFields();
});

When('user {string} adds a new footer with following details:',async function (user, details) {
    const { description, address, contactNo } = details.hashes()[0];
    await addFooter.enterFooterDetails(description, address, contactNo);
});

Then('the footer description {string}, {string}, {string} should show up in store website',async function (footerDesc, address, contactNo, ) {
    await page.goto("http://127.0.0.1:3000/");
    await expect(page.locator(addFooter.checkFooterDescSelector)).toHaveText(footerDesc);
    await expect(page.locator(addFooter.checkAddressSelector)).toContainText(address);
    await expect(page.locator(addFooter.checkContactNoSelector)).toContainText(contactNo);   
});
