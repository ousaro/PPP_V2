import { useHistory} from "react-router-dom"
import NavBar from "../Main Components/NavBar"
import { useEffect } from "react";
import {usePostsContext} from "../../Hooks/usePostsContext"

import PostsDetails from "../Main Components/PostsDetails"




const VuserHome = () => {


    const history=useHistory();

    const goBack = ()=>{
        history.goBack();
    }

    const { posts, dispatch } = usePostsContext()

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const response = await fetch("/api/posts");
            const json = await response.json();

            if(response.ok){
                dispatch({type: 'SET_POSTS', payload: json})
            }

        }

        fetchPosts();
    },[dispatch])


    return ( 
        <div className="ProfilePg UserHomePg">

            <NavBar></NavBar>

            <main className="Profile_Content UserHome_Content">

                <div className="Profile_Form_BackArrow UserHome_BackArrow" onClick={goBack}></div>

                <section className="UserHome_SearchBar" >
                    <input type="text" placeholder="Search for a post" className="UserHome_SearchBar_Input" />
                </section>


                <section className="UserHome_Post_Container">

                    {posts && posts.map((post)=>(
                            <PostsDetails key={post._id} post={post} canDelete={false} ></PostsDetails>
                        ))}
                </section>
                

            </main>

        </div>
     );
}
 
export default VuserHome;