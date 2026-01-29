import { Page } from "playwright"

export class RequestHandler{

    constructor(private page: Page){
    }

    async abortRequest(url: string){
        await this.page.route(url, async route =>{
            await route.abort()
        })
    }

}
