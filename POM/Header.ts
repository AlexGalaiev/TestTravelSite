import { Locator, Page } from "playwright";

export class MainHeader{
    private userCabinetHeaderBtn: Locator
    userMenu: Locator
    private headerName: Locator

    constructor(private readonly page: Page){
        this.userCabinetHeaderBtn = page.locator("#menuMyBrand")
        this.userMenu = page.locator("#ca-menu-lgdn")
        this.headerName = page.locator("//ul[@role='menubar']//span[@class='name']")
    }

    async openUserMenu(){
        await this.userCabinetHeaderBtn.click()
        await this.userMenu.waitFor({state:'visible'})
    }
    async chooseUserMenuItem(itemName:string){
        await this.page.locator(`//a[contains(@class, '${itemName}')]`).click()
    }
    async getHeaderName(){
        await this.page.waitForTimeout(1500)
        return await this.headerName.textContent()
    }
    
}