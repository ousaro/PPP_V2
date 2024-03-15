import React, {createContext, useState} from "react";

export const UserTypeContext = createContext();

const UserTypeProvider = (props) => {

    const [ProfileType, setprofileType] = useState('');
    const [HomeType, sethomeType] = useState('');
    



    return (  
        <UserTypeContext.Provider value={{ProfileType,HomeType,setprofileType,sethomeType}}>
            {props.children}
        </UserTypeContext.Provider>



    );
}
 
export default UserTypeProvider;