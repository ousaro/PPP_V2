import { useHistory} from "react-router-dom"
import NavBar from "../Main Components/NavBar"






const AuserHome = () => {


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

                            <textarea name="Description" placeholder="Description"></textarea>

                            <label for="Post_file-upload" class="Post_custom-file-upload">
                            </label>
                            <input id="Post_file-upload" type="file" accept="image/*"/>

                            
                            <label htmlFor="serviceType" className="Post_Content_ProgramType-Title">Choose your Program Type</label>
                            <select name="ProgramType" className="Post_Content_ProgramType" id="ProgramType">
                                <option value="Nothing" selected disabled>Nothing</option>
                                <option value="Service">Service</option>
                                <option value="Donation">Donation</option>
                            </select>

                       </div>

                       <button className="Post_btn">Post</button>


                    </div>

                </section>
                

            </main>

        </div>
     );
}
 
export default AuserHome;