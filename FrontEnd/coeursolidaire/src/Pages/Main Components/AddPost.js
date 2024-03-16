import { useState } from "react";
import {usePostsContext} from "../../Hooks/usePostsContext"



const AddPost = () => {

    const {dispatch} =usePostsContext();

    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    //const [programeType, setProgrameType] = useState('');
    const [error, setError] = useState(null);
    const [emptyfields,setEmptyfields] = useState([])

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const post = {description, image}

        const response = await fetch("/api/posts",{
            method: "POST",
            body: JSON.stringify(post),
            headers:{
                'Content-Type' : "application/json"
            }
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            setEmptyfields(json.emptyFields);
        }
        if(response.ok){
            setDescription('')
            setImage('')
            //setProgrameType('')
            setError(null)
            setEmptyfields([])
            console.log("post added ", json);
            dispatch({type:'CREATE_POST', payload:json})
        }

    }


    return (  
        <form className="UserHome_Post" onSubmit={handleSubmit}>

            <div className="Post_Header">
                <div className="Nav_ProfileIcon Post_Header_ProfileIcon"></div>
                <div className="Post_Header_Info">
                    <p>Association name</p>
                    <p>not verified</p>
                </div>
            </div>
                                
            <div className="Post_Content">

                <textarea name="Description" className={emptyfields.includes('description') ? "Post_Content_Error" : ""} placeholder="Description" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>

                <label htmlFor="Post_file-upload" className="Post_custom-file-upload">
                </label>
                <input id="Post_file-upload" type="file" accept="image/*"/>

                                        
                <label htmlFor="serviceType" className="Post_Content_ProgramType-Title">Choose your Program Type</label>
                <select name="ProgramType" className="Post_Content_ProgramType" id="ProgramType" /* onChange={(e)=>{setProgrameType(e.target.value)}} */>
                    <option value="Nothing" defaultValue disabled>Nothing</option>
                    <option value="Service">Service</option>
                    <option value="Donation">Donation</option>
                </select>

            </div>

            {error && <div className="Post_Footer">{error}</div>}

            <button className="Post_btn" type="submit">Post</button>


        </form>
    );
}
 
export default AddPost;