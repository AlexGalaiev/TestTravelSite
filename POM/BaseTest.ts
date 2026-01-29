import { Locator, Page } from "@playwright/test";
import {MainHeader} from "..//POM/Header"
import { LoginFrom } from "./forms/LoginLogoutForm";
import { UserCabinet } from "./UserCabinet";
import { locales } from "zod";
import { RequestHandler } from "../helpers/EventsInterception";
import { MainPage } from "./MainPage";
import { CreateLeadForm } from "./forms/CreateLeadForm";

export class BaseTest{
    header: MainHeader
    loginPage: LoginFrom
    userCabinet: UserCabinet
    mainPage: MainPage
    page: Page
    requestHandler: RequestHandler
    createLead: CreateLeadForm
    private cookieBtn: Locator
    private cookieBar: Locator
    private upsHeader: Locator    


    constructor(page:Page){
        this.page = page
        this.header = new MainHeader(page)
        this.loginPage = new LoginFrom(page)
        this.userCabinet = new UserCabinet(page)
        this.mainPage = new MainPage(page)
        this.requestHandler = new RequestHandler(page)
        this.createLead = new CreateLeadForm(page)
        this.cookieBtn = this.page.locator("//button[text()='Accepteer cookies']")
        this.cookieBar = this.page.locator("//dialog[contains(@class, 'cookieinfo')]")
        this.upsHeader = this.page.locator(".usp-header")
    }

    async open(url: string){
        await this.page.goto(url)
        if(await this.cookieBar.isVisible()){
            await this.cookieBtn.click()
            await this.cookieBar.waitFor({state:'hidden'})
        }
    }
}