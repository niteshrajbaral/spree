const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");

const { LoginPage} = require("../pageObjects/LoginPage");
const { AddPromotion } = require("../pageObjects/AddPromotion");
const addPromotion = new AddPromotion();
const login = new LoginPage();


Given('user {string} has logged in to the admin panel with following credentials:', async function (user, credentials) {
    await login.navigateToAdminLoginPage();
    for (const { email, password } of credentials.hashes()) {
        await login.login(email,password);
      }
    await page.waitForURL("http://127.0.0.1:3000/", { timeout: 5000 });
  });

When('user {string} adds a new promotion with following details:', async function (user, details) {
  await addPromotion.navigateToAddPromotion();
  for (const { name, code, path, description, limit } of details.hashes()) {
      await addPromotion.addDetails(name, code, path, description, limit);
    }
});

Then('the promotion name {string} should show up in the list of promotion section', async function (name) {
  await addPromotion.navigateToPromotionTable();
  await expect(page.locator(addPromotion.sideBarMenuItems.checkPromotion)).toHaveText(name);
});
