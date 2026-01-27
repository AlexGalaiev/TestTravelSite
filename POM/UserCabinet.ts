import { Locator, Page } from "@playwright/test";

export class UserCabinet {
    dashBoardStatus: Locator

    constructor(private readonly page: Page){
        this.dashBoardStatus = this.page.locator('#headerInfo #dashboardstatus')
    }


}