import { useAuthContext } from "./useAuthContext";

export const useLogout = ()=>{

    const {dispatch } = useAuthContext()

    const logout =()=>{
        // remouve the json file form loclastorage
        localStorage.removeItem('user');

        dispatch({type: "LOGOUT"});

    }

    return {logout}
}