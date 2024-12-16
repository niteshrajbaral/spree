const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");

const loginBtnSelector = ".btn.btn-block.btn-primary"
const emailFieldSelector = "#spree_user_email"
const passwordFieldSelector = "#spree_user_password"
const dashboardSelector = "//div[@id='missingHomepage']//h1"
const invalidErrorSelector = ".alert-danger"

Given('user {string} has navigated to the admin login page', async function (user) {
  await page.goto("http://127.0.0.1:3000/admin/login")
  await expect(page).toHaveURL("http://127.0.0.1:3000/admin/login")
});

When('user {string} logs in with following credentials',async function (user, credentials) {
  for (const { email, password } of credentials.hashes()) {
    await page.fill(emailFieldSelector, email);
    await page.fill(passwordFieldSelector, password);
    await page.click(loginBtnSelector);
  }
});

Then('user {string} should be navigated to admin panel dashboard', async function (user) {
  await page.waitForURL("http://127.0.0.1:3000/", { timeout: 5000 });
  await expect(page).toHaveURL("http://127.0.0.1:3000/")
  await expect(page.locator(dashboardSelector)).toBeVisible();
});

When('the user tries to log in with following credentials',async function (credentials) {
  for (const { email, password } of credentials.hashes()) {
    await page.fill(emailFieldSelector, email);
    await page.fill(passwordFieldSelector, password);
    await page.click(loginBtnSelector);
  }
});

Then('error message {string} should be shown',async function (errorMessage) {
  await expect(page.locator(invalidErrorSelector)).toHaveText(errorMessage);

});
