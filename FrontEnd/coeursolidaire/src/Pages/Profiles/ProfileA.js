import EditIcon from "../../imgs/EditIcon.png"
import { Link , useHistory} from "react-router-dom"
import NavBar from "../Main Components/NavBar"
import Footer from "../Main Components/Footer"
import { useAuthContext } from "../../Hooks/useAuthContext"
import { useLogout } from "../../Hooks/useLogout"



const ProfileA = () => {

    const {user} = useAuthContext()
    const {logout} = useLogout()

    const history=useHistory();

    const goBack = ()=>{
        history.goBack();
    }

    const ChangePg=(e)=>{
        history.push(e);
    }


    const handleClick=()=>{

        logout()
        ChangePg("/")
    }

    return ( 
        <div className="ProfilePg ProfileVPg">

            <NavBar></NavBar>

            <main className="Profile_Content ProfileA_Content">
            
                <form className="Profile_Content_Form ProfileA_Content_Form" onSubmit={(e)=>    
                            {e.preventDefault()
                            alert("Information Updated")}}>

                    <div className="Profile_Form_BackArrow ProfileA_Form_BackArrow" onClick={goBack}></div>

                    <section className="Profile_Form_Header ProfileA_Form_Header">

                       
                        <div className="Nav_ProfileIcon Profile_Form_Header_ProfileIcon ProfileA_Form_Header_ProfileIcon">
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
                            <input type="text" placeholder="Email" value={user.email}/>
                            <input type="text" placeholder="City" />
                        </section>

                        <section className="Profile_Form_Field ProfileA_Form_Field">
                            <input type="password" placeholder="Change password" />
                            <button type="button" className=" Profile_Form_Btn  ProfileA_Form_LogOutBtn"  onClick={()=>ChangePg("/verificationForm")}>Verify</button>
                        </section>
            
                        <button type="submit" className=" Profile_Form_Btn ProfileA_Form_UpdateBtn">Update</button>
                        <button className=" Profile_Form_Btn  ProfileA_Form_LogOutBtn" onClick={handleClick} >Log out</button>

                    </section>
                    

                    
                </form>

            </main>

            <Footer></Footer>

        </div>
     );
}
 
export default ProfileA;