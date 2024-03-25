import { useState} from "react"
import {useAuthContext} from "./useAuthContext"


export const useASignUp = () => {

    const [aisLoading, setIsLoading]= useState(false)
    const [aerror, setError] = useState(null)
    const [anext, setNext] = useState(false)
    const {dispatch} = useAuthContext();


    const asignup = async (name,address,email,city, password, confirmPass, description)=>{
        setError(null)
        setIsLoading(true);

        const response = await fetch('/api/users/association/signup',{
            method: "POST",
            headers:{
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({name,address,email,city, password, confirmPass, description})
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

    return {asignup, aerror, aisLoading , anext}

}