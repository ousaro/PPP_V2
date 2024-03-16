import TestImg from "../../imgs/TestIimg.png" ;
import { usePostsContext } from "../../Hooks/usePostsContext";


// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const PostsDetails = ({post}) => {

    const {dispatch} = usePostsContext()

    const handleDelete= async ()=>{
        

        const response = await fetch('/api/posts/' + post._id,{
            method: 'DELETE'
        })

        const json = await response.json();

        if(response.ok){
            dispatch({type:'DELETE_POST', payload:json})
        }
    
    }


    return ( 
        
        <div className="UserHome_Post">
  
            <div className="Post_Header">
                <div className="Nav_ProfileIcon Post_Header_ProfileIcon"></div>
                <div className="Post_Header_Info">
                    <p>Association name</p>
                    <p>not verified</p>
                </div>

                <div className="Post_Header_Date">
                    <p>{formatDistanceToNow(new Date(post.createdAt),{addSuffix:true})}</p>
                </div>

                <div className="Post_Header_Delete"><button className="Post_Header_DeleteBtn" onClick={handleDelete}></button></div>

            </div>
                       
            <div className="Post_Content">

                            
                <div className="Post_Content_Description">
                    <p>{post.description}</p>
                </div>
                            

                <figure className="Post_Content_Image">
                    <img src={TestImg} alt="Post_image" width="641" height="341" />
                </figure>
                            
                            

                </div>

                <button className="Post_btn">Participate</button>


        </div>

     );
}
 
export default PostsDetails;