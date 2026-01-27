import { Locator, Page } from "@playwright/test";

export class LoginFrom{
    private loginEmail: Locator
    private loginPassword: Locator
    private LoginBtn: Locator
    private loginForm: Locator

    constructor(private readonly page: Page){
        this.loginForm = page.locator('(//form[@class="gigya-login-form"])[1]')
        this.loginEmail = this.loginForm.locator('(//input[@name="username"])[1]')
        this.loginPassword = this.loginForm.locator('(//input[@name="password"])[1]')
        this.LoginBtn = this.loginForm.locator("(//button[@type='submit'])[1]")
    }

    async loginUser(email:string, password:string){
        await this.loginForm.scrollIntoViewIfNeeded()
        await this.loginEmail.fill(email)
        await this.loginPassword.fill(password)
        await this.LoginBtn.click()
        await this.page.locator("#headerInfo").waitFor({state:'visible'})
    }


}