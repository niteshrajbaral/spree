class LoginPage{
    constructor(){
        this.emailFieldSelector = "#spree_user_email"
        this.loginBtnSelector = ".btn.btn-block.btn-primary"
        this.passwordFieldSelector = "#spree_user_password"
        this.dashboardSelector = "//div[@id='missingHomepage']//h1"
        this.errorMessageSelector = ".alert-danger"
    }

    async navigateToAdminLoginPage() {
        await page.goto("http://127.0.0.1:3000/admin/login");
    }

    async login(email, password) {
        await page.fill(this.emailFieldSelector, email);
        await page.fill(this.passwordFieldSelector, password);
        await page.click(this.loginBtnSelector);
      }
}

module.exports = { LoginPage }


