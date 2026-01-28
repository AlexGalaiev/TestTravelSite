import {test} from "../test-option"
import {expect} from "@playwright/test"
test.describe('TUI. Login functionality',async()=>{

    test('Test for login by previously created user and log out', async({app})=>{
        
        await test.step('Increase speed of site uploading, abort some heavy elemets', async()=>{
            await app.requestHandler.abortRequest("**/public/**")
        })
        await test.step('Open login form', async()=>{
            await app.open('/mijntui/')
        })
        await test.step('Login by previously created customer', async()=>{
            await app.loginPage.loginUser(process.env.USER_EMAIL || '', process.env.USER_PASSWORD||'')
        })
        await test.step('Check that user dashboard is displayed', async()=>{
            expect(await app.userCabinet.dashBoardStatus).toBeVisible()
            expect(await app.userCabinet.getUserGreetingsText()).toContain("Alexander")
        })
        await test.step('Log out user from platform', async()=>{
            await app.header.openUserMenu()
            await app.header.chooseUserMenuItem('logoff')
            await app.header.userMenu.waitFor({state:'hidden'})
            expect(await app.header.getHeaderName()).toEqual('myTUI')
        })

    })
})