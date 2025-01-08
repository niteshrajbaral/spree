class DeletePromotion {
    constructor(){
        this.deleteIconSelector = "//td/a[text()='New year']/../following-sibling::td[6]/span/a[2]";
        this.promotionSelector = "//td/a[text()='New year']"
    }
    async performDeletion () {
        page.on('dialog', dialog => dialog.accept());
        await page.click(this.deleteIconSelector);
    }
}

module.exports={DeletePromotion}