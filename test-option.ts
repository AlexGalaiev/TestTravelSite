import {test as base, Page} from "@playwright/test"
import { BaseTest } from "./POM/BaseTest"
import { BaseTestApi } from "./POM/BaseTestApi"


export type TestOptions = {
    TUI: string,
    app: BaseTest,
    api: BaseTestApi
}

export const test = base.extend<TestOptions>({
    TUI:['', {option: true}],
    app: async({page}, use)=>{
        let baseTest = new BaseTest(page)
        await use(baseTest)
        await page.close()
    },
    api: async({page}, use)=>{
        let basetestApi = new BaseTestApi(page)
        await use(basetestApi)
    }
})