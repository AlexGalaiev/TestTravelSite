import {test} from "../test-option"
import {expect} from "@playwright/test"
test.describe('TUI. Login functionality',async()=>{

    test('Login by previously created user', async({app})=>{
        await app.page.route('https://www.tui.nl/public/**', async route =>{
            route.abort()
        })
        await test.step('Open login form', async()=>{
            await app.open('/mijntui/')
        })
        await test.step('Login by previously created customer', async()=>{
            await app.loginPage.loginUser(process.env.USER_EMAIL || '', process.env.USER_PASSWORD||''
            )
        })
        await test.step('Check that user dashboard is displayed', async()=>{
            expect(await app.userCabinet.dashBoardStatus).toBeVisible()
        })
    })
})