const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");

const { LoginPage } = require("../pageObjects/LoginPage");
const { AddPromotion } = require("../pageObjects/AddPromotion");
const addPromotion = new AddPromotion();
const login = new LoginPage();


Given('user {string} has logged in to the admin panel with following credentials:', async function (user, credentials) {
  await login.navigateToAdminLoginPage();
  const {email, password} = credentials.hashes()[0];
  await login.login(email, password);
  await page.waitForURL("http://127.0.0.1:3000/", { timeout: 5000 });
});

When('user {string} adds a new promotion with following details:', async function (user, details) {
  await addPromotion.navigateToPromotionsPage();
  const { name, code, path, description, limit } = details.hashes()[0];
  await addPromotion.addPromotion(name, code, path, description, limit);
});

Then('the promotion name {string} should show up in the list of promotion section', async function (promotionName) {
  await addPromotion.navigateToPromotionTable();
  await expect(page.locator(addPromotion.sideBarMenuItems.checkPromotion)).toHaveText(promotionName);
});
