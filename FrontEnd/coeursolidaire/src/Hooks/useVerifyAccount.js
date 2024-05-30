import { useState} from "react"




export const useVerifyAccount = () => {

    const [isLoading, setIsLoading]= useState(false)
    const [error, setError] = useState(null)

    const verifyAccount = async (data)=>{
        setError(null)
        setIsLoading(true);

        const response = await fetch('/api/users/verifyAccount',{
            method: "POST",
            headers:{
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({...data})
        })

        const json = await response.json();

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
           
            setIsLoading(false)
            
        }

    }

    return {verifyAccount, error, isLoading }

}