const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

Given('the user has navigated to the login page', function () {
  // Write code here that turns the phrase above into concrete actions
  console.log(" Given from background");
  
});

When('the admin logs in the email {string} and password {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  console.log(" When block ");
});

Then('admin should be displayed homepage', function () {
  // Write code here that turns the phrase above into concrete actions
  console.log(" Then block from scenario 1");
});

Then('error message {string} should be shown', function (string) {
  // Write code here that turns the phrase above into concrete actions
  console.log(" Then block from scenario 2");

});