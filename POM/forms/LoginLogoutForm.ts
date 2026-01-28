import { Locator, Page } from "@playwright/test";

export class LoginFrom{
    private loginEmail: Locator
    private loginPassword: Locator
    private LoginBtn: Locator
    private loginForm: Locator

    constructor(private readonly page: Page){
        this.loginForm = page.locator("//form[@class='gigya-login-form']").first()
        this.loginEmail = this.loginForm.locator('[data-gigya-name="loginID"]').first()
        this.loginPassword = this.loginForm.locator('//input[@name="password"]').first()
        this.LoginBtn = this.loginForm.locator("//button[@type='submit']").first()
    }

    async loginUser(email:string, password:string){
        await this.loginEmail.waitFor({state:'visible'})
        await this.LoginBtn.scrollIntoViewIfNeeded()
        await this.loginEmail.waitFor({'state':'visible'})
        await this.loginEmail.pressSequentially(email, {delay:100})
        await this.loginPassword.pressSequentially(password, {delay:100})
        await this.page.waitForTimeout(1000)
        await this.LoginBtn.click()
        await this.page.locator("#headerInfo").waitFor({state:'visible'})
    }


}