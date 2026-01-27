import { Page } from "playwright"

type ChangeRetailChain = (json: any)=> Promise<void>

export class RequestHandler{

    constructor(private page: Page){
    }

    // async fetchResponse(url: string, modifyFn ?: ChangeRetailChain){
    //     await this.page.route(url, async route=>{
    //         let response = await route.fetch()
    //         let responseBody = await response.json()
    //         if(modifyFn){
    //             const result = await modifyFn(responseBody)
    //             if(result) responseBody = result
    //         }
    //         await route.fulfill({
    //             response,
    //             json: responseBody
    //         })
    //     })
//}
    
}
