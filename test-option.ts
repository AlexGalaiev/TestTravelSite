import {test as base, page} from "@playwright/test"
import { BaseTest } from "./POM/BaseTest"


export type TestOptions = {
    TUI: string,
    app: BaseTest
}

export const test = base.extend<TestOptions>({
    TUI:['', {option: true}],
    app: async({page}, use)=>{
        let baseTest = new BaseTest(page)
        use(baseTest)
        page.close()
    }
})