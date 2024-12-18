const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");
const { LoginPage } = require("../pageObjects/LoginPage");
const loginPage = new LoginPage();

Given('user {string} has navigated to the admin login page', async function (user) {
  await loginPage.navigateToAdminLoginPage()
  await expect(page).toHaveURL("http://127.0.0.1:3000/admin/login")
});

When('user {string} logs in with following credentials',async function (user, credentials) {
  for (const { email, password } of credentials.hashes()) {
    await loginPage.login(email,password)
  }
});

Then('user {string} should be navigated to admin panel dashboard', async function (user) {
  await page.waitForURL("http://127.0.0.1:3000/", { timeout: 5000 });
  await expect(page).toHaveURL("http://127.0.0.1:3000/")
  await expect(page.locator(loginPage.dashboardSelector)).toBeVisible();
});

When('the user tries to log in with following credentials',async function (credentials) {
  for (const { email, password } of credentials.hashes()) {
    await loginPage.login(email,password)
  }
});

Then('error message {string} should be shown',async function (errorMessage) {
  await expect(page.locator(loginPage.errorMessageSelector)).toHaveText(errorMessage);
});
