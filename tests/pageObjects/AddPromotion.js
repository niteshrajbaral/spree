class AddPromotion{
    constructor(){
        this.adminIconSelector = "#account-button";
        this.adminPanelSelector = "//div[@id='link-to-account']/a[2]";
        this.promotionTabSelector = "//a[@href='#sidebar-promotions']";
        this.promotionSubTabSelector = "//a[@href='/admin/promotions']";

        this.nameFieldSelector = "#promotion_name";
        this.codeFieldSelector = "#promotion_code";
        this.couponCodeCheckboxSelector = "#promotion_generate_code";
        this.pathFieldSelector = "#promotion_path";
        this.advertiseCheckboxSelector = "#promotion_advertise";
        this.descriptionFieldSelector = "#promotion_description";
        this.limitFieldSelector = "#promotion_usage_limit";
        this.startDateIconSelector = "(//span[@class='input-group-text'])[1]";
        this.startDateSelector = "(//div[@class='dayContainer'])[1]/span[1]";
        this.headerSelector = "//body/header/nav/div[3]"
        this.endDateIconSelector = "(//span[@class='input-group-text'])[2]";
        this.endDateSelector = "(//div[@class='dayContainer'])[2]/span[2]";

        this.sideBarMenuItems = {
            newPromotionSelector : "//div[@data-hook='toolbar']/a",
            createBtnSelector : "//div[@class='form-actions']/button",
            checkPromotion : "//table[@class='table']/tbody/tr[1]/td[1]/a[1]"
        }
    }

    async navigateToPromotionsPage() {
        await page.click(this.adminIconSelector);
        await page.click(this.adminPanelSelector);
        await page.click(this.promotionTabSelector);
        await page.click(this.promotionSubTabSelector);
    }

    async addPromotion(name, code, path, description, limit ) {
        await page.click(this.sideBarMenuItems.newPromotionSelector);
        await page.fill(this.nameFieldSelector, name);
        await page.fill(this.codeFieldSelector, code);
        await page.click(this.couponCodeCheckboxSelector);
        await page.fill(this.pathFieldSelector, path);
        await page.click(this.advertiseCheckboxSelector);
        await page.fill(this.descriptionFieldSelector, description);
        await page.fill(this.limitFieldSelector, limit);
        await page.click(this.startDateIconSelector);
        await page.click(this.startDateSelector);
        await page.click(this.headerSelector);
        await page.click(this.endDateIconSelector);
        await page.click(this.endDateSelector);
        await page.click(this.headerSelector);
        await page.click(this.sideBarMenuItems.createBtnSelector);        
      }
    async navigateToPromotionTable(){
        await page.click(this.promotionSubTabSelector);
    }
}

module.exports = { AddPromotion }
