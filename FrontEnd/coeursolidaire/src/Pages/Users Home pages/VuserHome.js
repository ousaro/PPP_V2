import { useHistory} from "react-router-dom"
import NavBar from "../Main Components/NavBar"
import TestImg from "../../imgs/TestIimg.png" ;





const VuserHome = () => {


    const history=useHistory();

    const goBack = ()=>{
        history.goBack();
    }

    return ( 
        <div className="ProfilePg UserHomePg">

            <NavBar></NavBar>

            <main className="Profile_Content UserHome_Content">

                <div className="Profile_Form_BackArrow UserHome_BackArrow" onClick={goBack}></div>

                <section className="UserHome_SearchBar" >
                    <input type="text" placeholder="Search for a post" className="UserHome_SearchBar_Input" />
                </section>


                <section className="UserHome_Post_Container">

                    <div className="UserHome_Post">

                        <div className="Post_Header">
                            <div className="Nav_ProfileIcon Post_Header_ProfileIcon"></div>
                            <div className="Post_Header_Info">
                                <p>Association name</p>
                                <p>not verified</p>
                            </div>
                        </div>
                       
                       <div className="Post_Content">

                            
                            <div className="Post_Content_Description">
                                <p>Nous sommes à la recherche de bénévoles passionnés et engagés pour participer à notre programme de cours de soutien. 
                                </p>
                            </div>
                            

                            <figure className="Post_Content_Image">
                                <img src={TestImg} alt="Post_image" width="641" height="341" />
                            </figure>
                            
                            

                       </div>

                       <button className="Post_btn">Participate</button>


                    </div>


                    <div className="UserHome_Post">

<div className="Post_Header">
    <div className="Nav_ProfileIcon Post_Header_ProfileIcon"></div>
    <div className="Post_Header_Info">
        <p>Association name</p>
        <p>not verified</p>
    </div>
</div>

<div className="Post_Content">

    
    <div className="Post_Content_Description">
        <p>Nous sommes à la recherche de bénévoles passionnés et engagés pour participer à notre programme de cours de soutien. 
        </p>
    </div>
    

    <figure className="Post_Content_Image">
        <img src={TestImg} alt="Post_image" width="641" height="341" />
    </figure>
    
    

</div>

<button className="Post_btn">Participate</button>


</div>
<div className="UserHome_Post">

<div className="Post_Header">
    <div className="Nav_ProfileIcon Post_Header_ProfileIcon"></div>
    <div className="Post_Header_Info">
        <p>Association name</p>
        <p>not verified</p>
    </div>
</div>

<div className="Post_Content">

    
    <div className="Post_Content_Description">
        <p>Nous sommes à la recherche de bénévoles passionnés et engagés pour participer à notre programme de cours de soutien. 
        </p>
    </div>
    

    <figure className="Post_Content_Image">
        <img src={TestImg} alt="Post_image" width="641" height="341" />
    </figure>
    
    

</div>

<button className="Post_btn">Participate</button>


</div>
<div className="UserHome_Post">

<div className="Post_Header">
    <div className="Nav_ProfileIcon Post_Header_ProfileIcon"></div>
    <div className="Post_Header_Info">
        <p>Association name</p>
        <p>not verified</p>
    </div>
</div>

<div className="Post_Content">

    
    <div className="Post_Content_Description">
        <p>Nous sommes à la recherche de bénévoles passionnés et engagés pour participer à notre programme de cours de soutien. 
        </p>
    </div>
    

    <figure className="Post_Content_Image">
        <img src={TestImg} alt="Post_image" width="641" height="341" />
    </figure>
    
    

</div>

<button className="Post_btn">Participate</button>


</div>
<div className="UserHome_Post">

<div className="Post_Header">
    <div className="Nav_ProfileIcon Post_Header_ProfileIcon"></div>
    <div className="Post_Header_Info">
        <p>Association name</p>
        <p>not verified</p>
    </div>
</div>

<div className="Post_Content">

    
    <div className="Post_Content_Description">
        <p>Nous sommes à la recherche de bénévoles passionnés et engagés pour participer à notre programme de cours de soutien. 
        </p>
    </div>
    

    <figure className="Post_Content_Image">
        <img src={TestImg} alt="Post_image" width="641" height="341" />
    </figure>
    
    

</div>

<button className="Post_btn">Participate</button>


</div>

                </section>
                

            </main>

        </div>
     );
}
 
export default VuserHome;