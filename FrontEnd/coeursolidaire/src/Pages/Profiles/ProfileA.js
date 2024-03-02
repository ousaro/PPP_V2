import ProfileLogo from "../../imgs/ProfileLogo.png"
import SettingIcon from "../../imgs/settingIcon.png"
import EditIcon from "../../imgs/EditIcon.png"
import HomeIcon from "../../imgs/HomeIcon.png"
import MessangerIcon from "../../imgs/MessangerIcon.png"
import NotificationIcon from "../../imgs/NotificationIcon.png"
import { Link , useHistory} from "react-router-dom"




const ProfileA = () => {



    const history=useHistory();

    const goBack = ()=>{
        history.goBack();
    }

    const ChangePg=(e)=>{
        history.push(e);
    }


    return ( 
        <div className="ProfilePg ProfileVPg">

            <header className="Profile_Header ProfileA_Header">

                <figure>
                    <Link to="#"><img src={SettingIcon} alt="settingIcon" width="39" height="39"/></Link>
                </figure>

                <figure>
                    <Link to="/"><img src={HomeIcon} alt="HomeIcon" width="39" height="39"/></Link>
                </figure>

                <figure className="Profile_Header_Logo ProfileA_Header_Logo">
                    <img src={ProfileLogo} alt="Logo" width="262" height="236"/>
                </figure>

                <figure>
                    <Link to="#"><img src={MessangerIcon} alt="MessangerIcon" width="39" height="39"/></Link>
                </figure>

                <figure>
                    <Link to="#"><img src={NotificationIcon} alt="NotificationIcon" width="39" height="39"/></Link>
                </figure>

                <Link to="/ProfileV"><div className="ProfileIcon Profile_Header_ProfileIcon ProfileA_Header_ProfileIcon"></div></Link>
            </header>


            <main className="Profile_Content ProfileA_Content">
            
                <form className="Profile_Content_Form ProfileA_Content_Form" onSubmit={(e)=>    
                            {e.preventDefault()
                            alert("Information Updated")}}>

                    <div className="Profile_Form_BackArrow ProfileA_Form_BackArrow" onClick={goBack}></div>

                    <section className="Profile_Form_Header ProfileA_Form_Header">

                       
                        <div className="ProfileIcon Profile_Form_Header_ProfileIcon ProfileA_Form_Header_ProfileIcon">
                            <figure className="Profile_Form_EditIcon ProfileA_Form_EditIcon">
                                <Link to="#"><img src={EditIcon} alt="EditIcon" width="39" height="39"/></Link>
                            </figure>
                        </div>

                        

                        <p>Not verified</p>

                    </section>

                    <section className="Profile_Form_Content ProfileA_Form_Content">

                        <textarea name="description" placeholder="Description of main goals of the association"></textarea>
                        
                        <section className="Profile_Form_Field ProfileA_Form_Field">
                            <input type="text" placeholder="Association name" />
                            <input type="address" placeholder="Address" />
                        </section>
            

                        <section className="Profile_Form_Field ProfileA_Form_Field">
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="City" />
                        </section>

                        <section className="Profile_Form_Field ProfileA_Form_Field">
                            <input type="password" placeholder="Change password" />
                            <button className=" Profile_Form_Btn  ProfileA_Form_LogOutBtn" >My Posts</button>
                        </section>
            
                        <button type="submit" className=" Profile_Form_Btn ProfileA_Form_UpdateBtn">Update</button>
                        <button className=" Profile_Form_Btn  ProfileA_Form_LogOutBtn" onClick={()=>ChangePg("/")} >Log out</button>

                    </section>
                    

                    
                </form>

            </main>

            <footer className="Footer ProfileV_Footer">
            <p>&copy; 2024 CoeurSolidaire- All Rights Reserved</p>
            </footer>

        </div>
     );
}
 
export default ProfileA;