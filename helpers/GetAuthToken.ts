import { request } from "@playwright/test";
import { RequestHandler } from "./RequestHandler";
import { config } from "../api-test.config";

export async function getLoginUserCockies(){
    let context = await request.newContext()
    let api = new RequestHandler(context)

    await api
      .url("https://login.tui.nl")
      .path('/accounts.login')
      .headers({
            "content-type":"application/x-www-form-urlencoded"
          })
      .body({
        "loginID":`${process.env.USER_EMAIL}`,
        "password":`${process.env.USER_PASSWORD}`,
        "APIKey":`${process.env.APIKEY}`,
        "pageURL":"https://www.tui.nl/mijntui/"
      })
      .POST_Request(200);

    await api.request.storageState({path:'.auth/TUI_LoginUser.json'})
}
