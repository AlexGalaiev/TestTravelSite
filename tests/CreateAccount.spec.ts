import { expect } from "playwright/test"
import { getFakeUser } from "../helpers/FakePerson"
import {test} from  "../test-option"

test.describe("TUI create account functionality", async()=>{
    
    test('Create lead user', async({app})=>{
        let fakeUser = getFakeUser('en')
        await test.step('Open create lead page', async()=>{
            await app.open("/mijntui/#registreren")
        })
        await test.step('Fill create account form and create lead user', async()=>{
            await app.createLead.createLeadUser(fakeUser.name, fakeUser.lastName, fakeUser.email)
        })
        await test.step('Check page after user created', async()=>{
            expect(await app.createLead.getPageTextAfterLeadCreation()).toContain(fakeUser.email)
        })
    })

})