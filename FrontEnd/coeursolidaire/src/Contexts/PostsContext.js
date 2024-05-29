import React, {createContext, useReducer} from "react";


export const PostsContext = createContext();



export const PostsReducer = (state,action)=>{

    switch(action.type){
        case 'SET_POSTS':
            return {
                posts: action.payload
            }
        case 'CREATE_POST':
            return {
                posts: [action.payload, ...state.posts]
            }
        case 'DELETE_POST':
            return {
                posts: state.posts.filter((p)=>p._id !== action.payload._id)
            }
            
        default:
            return state;
    }
}

export const PostsProvider = (props) => {

    const [state, dispatch] = useReducer(PostsReducer,{
        posts:[]
    })

    return (  
        <PostsContext.Provider value={{...state,dispatch}}>
            { props.children }
        </PostsContext.Provider>

    );
}
 
