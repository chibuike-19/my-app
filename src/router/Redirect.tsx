import React,{useEffect} from "react"
import { useNavigate } from "react-router-dom"

type redirectUrl = {
    redirectUrl?: string 
}

const Redirect = ({redirectUrl}: redirectUrl) => {
    let navigate = useNavigate()

    useEffect(() => {
        if(redirectUrl){
            navigate(redirectUrl)
        }
    }, [])

    return null

}
export default Redirect                                                                                                                                                                                                                                                                                                                