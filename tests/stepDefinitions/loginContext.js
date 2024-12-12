const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");


// for valid scenario
Given('user {string} has navigated to the admin login page', function (string) {
  console.log(" Given ");
});

When('user {string} logs in with following credentials', function (string, dataTable) {
  console.log(" When ");
  for (const { email, password } of dataTable.hashes()) {
    console.log(email, password)
  }

});

Then('user {string} should be navigated to admin panel dashboard', function (string) {
  console.log(" Then")
});


// For invalid scenarios

When('the user tries to log in with following credentials', function (dataTable) {
  for (const { email, password } of dataTable.hashes()) {
    console.log(email, password)
  }
});


Then('error message {string} should be shown', function (errorMessage) {
  console.log(errorMessage)

});
