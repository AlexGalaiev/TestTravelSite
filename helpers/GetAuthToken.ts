import { request } from "@playwright/test";
import { RequestHandler } from "./RequestHandler";
import { config } from "../api-test.config";

export async function getLoginUserCockies(){
    let context = await request.newContext()
    let api = new RequestHandler(context)

    let response = await api
      .url("https://login.tui.nl")
      .path('/accounts.login')
      .headers({
            "content-type":"application/x-www-form-urlencoded"
          })
      .body({
        "loginID":"sashagalaievsecond@gmail.com",
        "password":"Test123!",
        "APIKey":"3_2a2E-f6RXOVzzgC24sReKDz4N8luhuZcrGKAxp5v7W6T3SZEPpsxOhV3C5TXsV3G",
        "pageURL":"https://www.tui.nl/mijntui/"
      })
      .POST_Request(200);

      console.log(response)
    await api.request.storageState({path:'.auth/TUI_LoginUser.json'})
}