import { useHistory} from "react-router-dom"
import NavBar from "../Main Components/NavBar"
import { useEffect } from "react";
import {usePostsContext} from "../../Hooks/usePostsContext"
import { useAuthContext } from "../../Hooks/useAuthContext";
import PostsDetails from "../Main Components/PostsDetails"
import AddPost from "../Main Components/AddPost";
import { useState } from "react";





const AuserHome = () => {


    const history=useHistory();

    const [showAddPost,setShowAddPost] = useState(false);

    const goBack = ()=>{
        history.goBack();
    }

    const { posts, dispatch } = usePostsContext()
    const {user} = useAuthContext()

    useEffect(()=>{
        const fetchPosts = async ()=>{


            const response = await fetch("/api/posts/" + user._id, {
                headers: {
                    "Authorization" : `Bearer ${user.token}`
                }
            })
            const json = await response.json();

            if(response.ok){
                dispatch({type: 'SET_POSTS', payload: json})
            }

        }

        if(user){
            fetchPosts();
        }
       
    },[dispatch, user])


    return ( 
        <div className="ProfilePg UserHomePg">

            <NavBar></NavBar>

            <main className="Profile_Content UserHome_Content">

                <div className="Profile_Form_BackArrow UserHome_BackArrow" onClick={goBack}></div>
                
                <aside className="UserHome_Post_AddPostBtn">
                        <button onClick={()=>{setShowAddPost(!showAddPost)}}></button>
                </aside>

                <section className="UserHome_SearchBar" >
                    <input type="text" placeholder="Search for a post" className="UserHome_SearchBar_Input" />
                </section>

               
                <section className="UserHome_Post_Container">

                    
                    {showAddPost && showAddPost ? <AddPost></AddPost> : <span></span>}

                    {posts && posts.map((post)=>(
                        <PostsDetails key={post._id} post={post} canDelete={true}></PostsDetails>
                    ))}
                    
                    
                </section>
                

            </main>

        </div>
     );
}
 
export default AuserHome;