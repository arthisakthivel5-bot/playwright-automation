class LoginPage {

    constructor(page) {
        this.page = page;
        this.userName = page.locator("#userEmail");
        this.passWord = page.locator("#userPassword");
        this.signInbutton = page.locator(".btn.btn-block.login-btn");

    }

    async gotoLoginpage() {

        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    }

    async Login(email, pwd) {

        await this.userName.fill(email);
        await this.passWord.fill(pwd);
        await this.signInbutton.click();
        await this.page.waitForLoadState("networkidle");
    }
}

module.exports = { LoginPage };