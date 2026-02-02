import { Page } from "@playwright/test";
import { EventsInterceptions } from "../helpers/EventsInterception";
import { getLoginUserCockies } from "..//helpers/GetAuthToken"

export class BaseTestApi{
    requestHandler: EventsInterceptions
    
    constructor(private page: Page){
        this.requestHandler = new EventsInterceptions(page)
    }
    
    async getLoginUserStorageState(){
        let data = await getLoginUserCockies()
        return data
    }


}