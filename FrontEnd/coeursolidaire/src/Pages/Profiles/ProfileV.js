import ProfileLogo from "../../imgs/ProfileLogo.png"
import SettingIcon from "../../imgs/settingIcon.png"
import EditIcon from "../../imgs/EditIcon.png"
import HomeIcon from "../../imgs/HomeIcon.png"
import MessangerIcon from "../../imgs/MessangerIcon.png"
import NotificationIcon from "../../imgs/NotificationIcon.png"
import { Link } from "react-router-dom"




const ProfileV = () => {
    return ( 
        <div className="ProfileVPg">

            <header className="ProfileV_Header">

                <figure>
                    <Link to="#"><img src={SettingIcon} alt="settingIcon" width="39" height="39"/></Link>
                </figure>

                <figure>
                    <Link to="/"><img src={HomeIcon} alt="HomeIcon" width="39" height="39"/></Link>
                </figure>

                <figure className="ProfileV_Header_Logo">
                    <img src={ProfileLogo} alt="Logo" width="262" height="236"/>
                </figure>

                <figure>
                    <Link to="#"><img src={MessangerIcon} alt="MessangerIcon" width="39" height="39"/></Link>
                </figure>

                <figure>
                    <Link to="#"><img src={NotificationIcon} alt="NotificationIcon" width="39" height="39"/></Link>
                </figure>

                <Link to="/ProfileV"><div className="ProfileIcon ProfileV_Header_ProfileIcon"></div></Link>
            </header>

            <main className="ProfileV_Content">

                
            
                <form className="ProfileV_Content_Form" onSubmit={(e)=>    
                            {e.preventDefault()
                            }}>

                    <div className="ProfileV_Form_BackArrow"></div>

                    <section className="ProfileV_Form_Header">

                       
                        <div className="ProfileIcon ProfileV_Form_Header_ProfileIcon"></div>

                        <figure>
                            <img src={EditIcon} alt="EditIcon" width="39" height="39"/>
                        </figure>

                        <p>Volounteer</p>

                    </section>

                    <section className="ProfileV_Form_Content">


                        <section className="ProfileV_Form_Field1">
                            <input type="text" placeholder="First name" />
                            <input type="text" placeholder="Last name" />
                        </section>
            

                        <section className="ProfileV_Form_Field2">
                            <input type="password" placeholder="Change password" />
                            <input type="date" />
                        </section>

                        
                        <section className="ProfileV_Form_Gender">
                            <label >Gender</label>
                            <div>
                                <input type="radio" name="gender" />
                                <label>Male</label>

                                <input type="radio" name="gender" />
                                <label>Female</label>
                            </div>
                            
                        </section>
                            
                        <input type="text" placeholder="Email" />

                        <button type="submit" className=" ProfileV_Form_Btn ProfileV_Form_UpdateBtn">Update</button>
                        <button className=" ProfileV_Form_Btn ProfileV_Form_LogOutBtn">Log out</button>

                    </section>
                    

                    
                </form>

            </main>

            <footer className="ProfileV_Footer">
            <p>2024 CoeurSolidaire- All Rights Reserved</p>
            </footer>

        </div>
     );
}
 
export default ProfileV;