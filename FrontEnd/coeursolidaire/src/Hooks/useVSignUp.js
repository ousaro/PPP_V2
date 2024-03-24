import { useState} from "react"
import {useAuthContext} from "./useAuthContext"


export const useVSignUp = () => {

    const [visLoading, setIsLoading]= useState(false)
    const [verror, setError] = useState(null)
    const [vnext, setNext] = useState(false)
    const {dispatch} = useAuthContext();


    const vsignup = async (email, password)=>{
        setError(null)
        setIsLoading(true);

        const response = await fetch('/api/users/volounteer/signup',{
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

    return {vsignup, verror, visLoading , vnext}

}