import { Locator, Page } from "@playwright/test";
import {MainHeader} from "..//POM/Header"
import { LoginFrom } from "./forms/LoginLogoutForm";
import { UserCabinet } from "./UserCabinet";
import { locales } from "zod";

export class BaseTest{
    private _header: MainHeader
    private _loginPage: LoginFrom
    private _userCabinet: UserCabinet
    private cookieBtn: Locator
    private cookieBar: Locator
    private upsHeader: Locator

    constructor(private readonly page: Page){
        this.cookieBtn = this.page.locator("//button[text()='Accepteer cookies']")
        this.cookieBar = this.page.locator("//dialog[contains(@class, 'cookieinfo')]")
        this.upsHeader = this.page.locator(".usp-header")
    }

    async open(url: string, path?:string){
        let currentUrl = `${url}${path}`
        await this.page.goto(currentUrl)
        await this.page.waitForTimeout(1000)
        await this.upsHeader.waitFor({state:'visible'})
        if(await this.cookieBar.isVisible()){
            await this.cookieBtn.click({force:true})
        }
        await this.page.waitForTimeout(10000)
    }

    get Header(){
        this._header = new MainHeader(this.page)
        return this._header
    }
    get LoginPage(){
        this._loginPage = new LoginFrom(this.page)
        return this._loginPage
    }
    get UserCabinet(){
        this._userCabinet = new UserCabinet(this.page)
        return this._userCabinet
    }
    

}