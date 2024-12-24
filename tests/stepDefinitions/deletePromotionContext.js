const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");

const { DeletePromotion } = require("../pageObjects/DeletePromotion");
const { AddPromotion } = require("../pageObjects/AddPromotion");
const deletePromotion = new DeletePromotion();
const addPromotion = new AddPromotion();

Given('user {string} added a new promotion with following details:',async function (user, details) {
    await addPromotion.navigateToPromotionsPage();
    const { name, code, path, description, limit } = details.hashes()[0];
    await addPromotion.addPromotion(name, code, path, description, limit);
});

When('the user {string} deletes the promotion {string}', async function (user, promotionName) {
    await addPromotion.navigateToPromotionTable();
    await deletePromotion.performDeletion();

});

Then('the promotion {string} should not be visible in promotions list', async function (promotionName) {
    await expect(page.locator(addPromotion.sideBarMenuItems.checkPromotion)).not.toHaveText(promotionName);
});


