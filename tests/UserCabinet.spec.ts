import {test} from "../test-option"

test.describe('TUI. Test user cabinet with saved storage state', async()=>{

    test.beforeAll("Get login cookies", async({app})=>{
            await app.getLoginUserStorageState()
    })
    
    test.use({storageState:".auth/TUI_LoginUser.json"})
    test('Check user name in cabinet',async({app})=>{
        await test.step('Open user cabinet (user must be logined) and check user name', async()=>{
            await app.open("https://www.tui.nl/mijntui/")
            await app.page.waitForTimeout(20000)
        })
    })
})