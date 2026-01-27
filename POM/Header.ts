import { Locator, Page } from "playwright";

export class MainHeader{
    private userCabinetHeaderBtn: Locator
    private userMenu: Locator

    constructor(private readonly page: Page){
        this.userCabinetHeaderBtn = page.locator("#menuMyBrand")
        this.userMenu = page.locator("#ca-menu-lgdn")
    }

    async openUserMenu(){
        await this.userCabinetHeaderBtn.click()
        await this.userMenu.waitFor({state:'visible'})
    }
    async chooseUserMenuItem(itemName:string){
        await this.page.locator(`//a[contains(@class, '${itemName}')]`).click()
    }
    
}