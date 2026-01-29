import { Locator, Page } from "playwright";

export class CreateLeadForm{
    private userName: Locator
    private userLastName: Locator
    private email: Locator
    private password: Locator
    private acceptCheckbox: Locator
    private submitBtn: Locator

    constructor(private readonly page: Page){
        this.userName = this.page.locator('//input[@name="profile.firstName"]').first()
        this.userLastName = this.page.locator('//input[@name="profile.lastName"]').first()
        this.email = this.page.locator('//input[@name="email"]').first()
        this.password = this.page.locator('(//input[@name="password"])[2]')
        this.acceptCheckbox = this.page.locator('//input[@id="nws-su"]')
        this.submitBtn = this.page.locator('//form[@class="gigya-register-form"]//button[@type="submit"]').first()
    }

    async createLeadUser(name:string, lastName:string, email:string){
        await this.userName.waitFor({state:'visible'})  
        await this.userName.scrollIntoViewIfNeeded()
        await this.userName.fill(name)
        await this.userLastName.fill(lastName)
        await this.email.fill(email)
        await this.password.fill('Test123!')
        await this.acceptCheckbox.scrollIntoViewIfNeeded()
        await this.acceptCheckbox.click()
        await this.submitBtn.click()
    }

    async getPageTextAfterLeadCreation(){
        return await this.page.locator("#sentEmailPlaceHolder").textContent()
    }
}