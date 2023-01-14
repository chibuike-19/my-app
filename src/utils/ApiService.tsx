import React from "react";
import { BaseUrl } from "./BaseUrl";

class ApiService {
    apiUrl:string 
    constructor(apiUrl: string){
        this.apiUrl = apiUrl
    }
    signIn(){

    }
}

const instance = new ApiService(BaseUrl)
export default instance