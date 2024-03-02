import ProfileLogo from "../../imgs/ProfileLogo.png"
import SettingIcon from "../../imgs/settingIcon.png"
import EditIcon from "../../imgs/EditIcon.png"
import HomeIcon from "../../imgs/HomeIcon.png"
import MessangerIcon from "../../imgs/MessangerIcon.png"
import NotificationIcon from "../../imgs/NotificationIcon.png"
import { Link , useHistory} from "react-router-dom"





const ProfileV = () => {


    const history=useHistory();

    const goBack = ()=>{
        history.goBack();
    }

    const ChangePg=(e)=>{
        history.push(e);
    }

    return ( 
        <div className="ProfilePg ProfileVPg">

            <header className="Profile_Header ProfileV_Header">

                <figure>
                    <Link to="#"><img src={SettingIcon} alt="settingIcon" width="39" height="39"/></Link>
                </figure>

                <figure>
                    <Link to="/"><img src={HomeIcon} alt="HomeIcon" width="39" height="39"/></Link>
                </figure>

                <figure className="Profile_Header_Logo ProfileV_Header_Logo">
                    <img src={ProfileLogo} alt="Logo" width="262" height="236"/>
                </figure>

                <figure>
                    <Link to="#"><img src={MessangerIcon} alt="MessangerIcon" width="39" height="39"/></Link>
                </figure>

                <figure>
                    <Link to="#"><img src={NotificationIcon} alt="NotificationIcon" width="39" height="39"/></Link>
                </figure>

                <Link to="/ProfileV"><div className="ProfileIcon Profile_Header_ProfileIcon ProfileV_Header_ProfileIcon"></div></Link>
            </header>


            <main className="Profile_Content ProfileV_Content">
            
                <form className="Profile_Content_Form ProfileV_Content_Form" onSubmit={(e)=>    
                            {e.preventDefault()
                            alert("Information Updated")}}>

                    <div className="Profile_Form_BackArrow ProfileV_Form_BackArrow" onClick={goBack}></div>

                    <section className="Profile_Form_Header ProfileV_Form_Header">

                       
                        <div className="ProfileIcon Profile_Form_Header_ProfileIcon ProfileV_Form_Header_ProfileIcon">
                            <figure className="Profile_Form_EditIcon ProfileV_Form_EditIcon">
                                <Link to="#"><img src={EditIcon} alt="EditIcon" width="39" height="39"/></Link>
                            </figure>
                        </div>

                        

                        <p>Volounteer</p>

                    </section>

                    <section className="Profile_Form_Content ProfileV_Form_Content">


                        <section className="Profile_Form_Field ProfileV_Form_Field">
                            <input type="text" placeholder="First name" />
                            <input type="text" placeholder="Last name" />
                        </section>
            

                        <section className="Profile_Form_Field ProfileV_Form_Field">
                            <input type="password" placeholder="Change password" />
                            <input type="date" />
                        </section>

                        
                        <section className="ProfileV_Form_Gender">
                            <label >Gender</label>
                            <div className="ProfileV_Gender_Options">
                                <input type="radio" name="gender" />
                                <label>Male</label>

                                <input type="radio" name="gender" />
                                <label>Female</label>
                            </div>
                            
                        </section>
                            
                        <input type="text" placeholder="Email" />

                        <button type="submit" className=" Profile_Form_Btn ProfileV_Form_UpdateBtn">Update</button>
                        <button className=" Profile_Form_Btn  ProfileV_Form_LogOutBtn" onClick={()=>ChangePg("/")} >Log out</button>

                    </section>
                    

                    
                </form>

            </main>

            <footer className="Footer ProfileV_Footer">
            <p>&copy; 2024 CoeurSolidaire- All Rights Reserved</p>
            </footer>

        </div>
     );
}
 
export default ProfileV;