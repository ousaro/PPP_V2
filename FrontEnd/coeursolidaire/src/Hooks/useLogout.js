import { useAuthContext } from "./useAuthContext";
import {usePostsContext} from "./usePostsContext";

export const useLogout = ()=>{

    const {dispatch } = useAuthContext()
    const {dispatch:postDispatch } = usePostsContext()


    const logout =()=>{
        // remouve the json file form loclastorage
        localStorage.removeItem('user');

        dispatch({type: "LOGOUT"});
        postDispatch({type: 'SET_POSTS', payload: null})

    }

    return {logout}
}