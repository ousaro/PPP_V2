import { useState} from "react"
import {useAuthContext} from "./useAuthContext"


export const useVLogin = () => {

    const [visLoading, setIsLoading]= useState(false)
    const [verror, setError] = useState(null)
    const [vnext, setNext] = useState(false)
    const {dispatch} = useAuthContext();


    const vlogin = async (email, password)=>{
        setError(null)
        setIsLoading(true);

        const response = await fetch('/api/users/volounteer/login',{
            method: "POST",
            headers:{
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({email, password})
        })

        const json = await response.json();

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
            setNext(false)
        }

        if(response.ok){
            // store the json output in the localStorage
            localStorage.setItem('user',JSON.stringify(json));

            // update the authContext 
            dispatch({type:"LOGIN", payload: json})

            setIsLoading(false)
            setNext(true)
        }

    }

    return {vlogin, verror, visLoading , vnext}

}