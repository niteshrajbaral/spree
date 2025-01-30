class AddFooter{
    constructor(){
        this.adminIconSelector = "#account-button";
        this.adminPanelSelector = "//div[@id='link-to-account']/a[2]";
        this.settingTabSelector = "//a[@href='#sidebar-settings']";
        this.storeTabSelector = "(//a[@href='/admin/stores/1/edit'])[1]";
        this.footerDescSelector = "//textarea[@id='store_description']";
        this.footerAddressSelector = "//textarea[@id='store_address']";
        this.footerContactPhSelector = "//input[@id='store_contact_phone']";
        this.updateBtnSelector = "//button[@type='submit']";
        this.checkFooterDescSelector = "//div[contains(@class,'footer-spree-info')]"
    }

    async navigateToFooterSection(){
        await page.click(this.adminIconSelector);
        await page.click(this.adminPanelSelector);
        await page.click(this.settingTabSelector);
        await page.click(this.storeTabSelector);
        
    }
    
    async enterFooterDetails(description, address, phone){
        await page.fill(this.footerDescSelector, description);
        await page.fill(this.footerAddressSelector, address);
        await page.fill(this.footerContactPhSelector, phone);
        await page.click(this.updateBtnSelector);
    }
}   

module.exports = { AddFooter }