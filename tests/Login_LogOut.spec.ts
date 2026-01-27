import {test} from "../test-option"
import {expect} from "@playwright/test"
test.describe('TUI. Login functionality',async()=>{

    test('Login by previously created user', async({app, TUI})=>{
        
        test.step('Open page with login form',async()=>{
            await app.open(TUI,'/mijntui/')
        })
        test.step('Login by previously created customer', async()=>{
            await app.LoginPage.loginUser(process.env.USER_EMAIL || '', process.env.USER_PASSWORD||''
            )
        })
        test.step('Check that user dashboard is displayed', async()=>{
            expect(await app.UserCabinet.dashBoardStatus).toBeVisible()
        })
    })
})