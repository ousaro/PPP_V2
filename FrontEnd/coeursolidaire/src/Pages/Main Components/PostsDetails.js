import { usePostsContext } from "../../Hooks/usePostsContext";
import { useAuthContext } from "../../Hooks/useAuthContext";


// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const PostsDetails = ({post, canDelete}) => {

    const {dispatch} = usePostsContext()
    const {user} = useAuthContext()

    const handleDelete= async ()=>{

        if(!user){
            return
        }


        const response = await fetch('/api/posts/' + post._id,{
            method: 'DELETE',
            headers : {
                "Authorization" : `Bearer ${user.token}`
            }
            
        })

        const json = await response.json();

        if(response.ok){
            dispatch({type:'DELETE_POST', payload:json})
        }
    
    }


    return ( 
        
        <div className="UserHome_Post">
  
            <div className="Post_Header">
                {user.photo ? <img src={post.association_profile} alt="profile" className="AddPost_Profile_img"/>:  <div className="Nav_ProfileIcon Post_Header_ProfileIcon"></div>}
                <div className="Post_Header_Info">
                    <p className="Post_Header_Name">{capitalizeEachWord(post.association_name)}</p>
                    <p className={`status ${post.association_verified ? 'verified' : 'not-verified'}`}>{post.association_verified ? "Verified": "Not Verified"}</p>
                </div>

                <div className="Post_Header_Date">
                    <p>{formatDistanceToNow(new Date(post.createdAt),{addSuffix:true})}</p>
                </div>

                {canDelete ? <div className="Post_Header_Delete"><button className="Post_Header_DeleteBtn" onClick={handleDelete}></button></div> : <div></div>}

            </div>
                       
            <div className="Post_Content">

                            
                <div className="Post_Content_Description">
                    <p>{post.description}</p>
                </div>
                            

                <figure className="Post_Content_Image">
                    {post.image && post.image ? <img src={post.image} alt="Post_image" width="641" height="341" /> : <div></div>}
                </figure>
                            
                </div>

                <button className="Post_btn">{post.programType === "Service" ? "Participate" : "Donate"}</button>


        </div>

     );
}


function capitalizeEachWord(sentence) {
    if (!sentence) return sentence; // Handle empty strings
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
 
export default PostsDetails;