import { Locator, Page } from "@playwright/test";

export class UserCabinet {
    dashBoardStatus: Locator
    private userGrretingsText: Locator

    constructor(private readonly page: Page){
        this.dashBoardStatus = this.page.locator('#headerInfo #dashboardstatus')
        this.userGrretingsText = this.page.locator("//div[@id='headerInfo']//span[@class='ttl4']").first()
    }

    async getUserGreetingsText(){
        return await this.userGrretingsText.textContent()
    }




} 