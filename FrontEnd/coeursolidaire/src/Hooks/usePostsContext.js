import { useContext } from "react"
import { PostsContext } from "../Contexts/PostsContext"

export const usePostsContext=()=>{

    const context = useContext(PostsContext);

    if(!context){
        throw Error("usePostsContext must be used an PostsProvider")
    
    }

    return context;

}