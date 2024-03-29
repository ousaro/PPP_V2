import EditIcon from "../../imgs/EditIcon.png"
import { Link , useHistory} from "react-router-dom"
import NavBar from "../Main Components/NavBar"
import Footer from "../Main Components/Footer"
import { useLogout } from "../../Hooks/useLogout"
import {useAuthContext} from "../../Hooks/useAuthContext"





const ProfileV = () => {


    const {logout} = useLogout()
    const history=useHistory();
    const {user} = useAuthContext()

    const formattedDate = new Date(user.date).toISOString().substr(0, 10);

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


            <main className="Profile_Content ProfileV_Content">
            
                <form className="Profile_Content_Form ProfileV_Content_Form" onSubmit={(e)=>    
                            {e.preventDefault()
                            alert("Information Updated")}}>

                    <div className="Profile_Form_BackArrow ProfileV_Form_BackArrow" onClick={goBack}></div>

                    <section className="Profile_Form_Header ProfileV_Form_Header">

                       
                        <div className="Nav_ProfileIcon Profile_Form_Header_ProfileIcon ProfileV_Form_Header_ProfileIcon">
                            <figure className="Profile_Form_EditIcon ProfileV_Form_EditIcon">
                                <Link to="#"><img src={EditIcon} alt="EditIcon" width="39" height="39"/></Link>
                            </figure>
                        </div>

                        

                        <p>Volounteer</p>

                    </section>

                    <section className="Profile_Form_Content ProfileV_Form_Content">


                        <section className="Profile_Form_Field ProfileV_Form_Field">
                            <input type="text" placeholder="First name" value={user.firstName} />
                            <input type="text" placeholder="Last name" value={user.lastName} />
                        </section>
            

                        <section className="Profile_Form_Field ProfileV_Form_Field">
                            <input type="password" placeholder="Change password" />
                            <input type="date" value={formattedDate} />
                        </section>

                        
                        <section className="ProfileV_Form_Gender">
                            <label >Gender</label>
                            <div className="ProfileV_Gender_Options">
                                <input type="radio" name="gender" checked={user.gender === "Male"}/>
                                <label>Male</label>

                                <input type="radio" name="gender" checked={user.gender === "Female"}/>
                                <label>Female</label>
                            </div>
                            
                        </section>
                            
                        <input type="text" placeholder="Email" value={user.email}/>

                        <button type="submit" className=" Profile_Form_Btn ProfileV_Form_UpdateBtn">Update</button>
                        <button className=" Profile_Form_Btn  ProfileV_Form_LogOutBtn" onClick={handleClick} >Log out</button>

                    </section>
                    

                    
                </form>

            </main>

            <Footer></Footer>

        </div>
     );
}
 
export default ProfileV;