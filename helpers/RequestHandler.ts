import { APIRequestContext } from "@playwright/test"

export class RequestHandler{

    request: APIRequestContext
    private apiUrl: string | undefined
    private apiPath: string
    private apiParams: Record<string, string> = {}
    private apiBody: object = {}
    private apiHeaders: Record<string, string> = {}

    constructor(request: APIRequestContext){
        this.request = request
    }

    url(url:string){
        this.apiUrl = url
        return this
    }
    
    path(path:string){
        this.apiPath = path
        return this
    }

    params(params: Record<string, string>){
        this.apiParams = params
        return this
    }

    body(body: object){
        this.apiBody = body
        return this
    }

    headers(headers: Record<string, string>){
        this.apiHeaders = headers
        return this
    }
    private getUrl(){        
        let url = new URL(`${this.apiUrl}${this.apiPath}`)
        for(let [key, value] of Object.entries(this.apiParams)){
            url.searchParams.append(key, value)
        }
        return url.toString()
    }

    async POST_Request(statusCode: number){
        let url = this.getUrl()
        //add checking response form
        const isForm = this.apiHeaders['content-type'] === 'application/x-www-form-urlencoded'
        //add sending via different form
        let response = await this.request.post(
            url, {
                headers: this.apiHeaders, 
                form: isForm ? this.apiBody : undefined,
                data: !isForm ? this.apiBody : undefined
            })
        this.cleanUpFileds()
        
        let actualStatus = await response.status()
        //this.statusCodeValidator(actualStatus, statusCode, this.POST_Request)
        let data = await response.text()
        return await data
    }

    private statusCodeValidator(actualCode: number, expectedCode: number, calledFunction: Function){
        if(actualCode !== expectedCode){
            let error = new Error(`Expected status coes is ${expectedCode} but got ${actualCode}\n\n Actual API info: ${logs}`)
            Error.captureStackTrace(error, calledFunction)
            throw error;
            
        }
    }
    private cleanUpFileds() {
        this.apiBody = {}
        this.apiHeaders = {}
        this.apiParams = {}
        this.apiPath = ''
        this.apiUrl = undefined
    }
}