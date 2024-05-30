import { useHistory,useLocation} from "react-router-dom"
import NavBar from "../Main Components/NavBar"
import Footer from "../Main Components/Footer"
import FormFooter from "../Main Components/FormFooter"
import { useLogout } from "../../Hooks/useLogout"
import { useAuthContext } from "../../Hooks/useAuthContext"




const Settings = () => {

    const {user,dispatch} = useAuthContext()
    const {logout} = useLogout()
    const history=useHistory();
    const location = useLocation()
    const currentPath = location.pathname;

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

    const handleEditProfileClick=()=>{
        const profilePage  = currentPath.startsWith("/Volounteer") ? '/Volounteer/ProfileV' : '/Association/ProfileA'
        ChangePg(profilePage)
    }

    const handleDelteAccount= async ()=>{

        if(!user){
            return
        }


        const response = await fetch('/api/users/' + user._id,{
            method: 'DELETE',
            headers : {
                "Authorization" : `Bearer ${user.token}`
            }
            
        })

        const json = await response.json();

        if(response.ok){
            localStorage.removeItem('user');
            dispatch({type:'LOGOUT', payload:json})
        }

    }

    return ( 
        <div className="ProfilePg SettingsPg">

            <NavBar></NavBar>

            <main className="Profile_Content Setting_Content">

                <div className="Profile_Content_Form Setting_Content_Form">

                    <h1 className="Setting_Title">Setting</h1>

                    <div className="Profile_Form_BackArrow Settings_BackArrow" onClick={goBack}></div>

                   <div className="Setting_Btns">
                        <button type="button" className="Setting_Btn  Setting_DeleteBtn" onClick={handleDelteAccount}>Delete my account</button>
                        <button type="button" className="Setting_Btn  Setting_ChangePassBtn" onClick={handleEditProfileClick}>Edit Profile</button>
                        <button type="button" className="Setting_Btn Setting_LogOutBtn" onClick={handleClick} >Log out</button>
                   </div>
                    <FormFooter></FormFooter>

                </div>
                

            </main>

            <Footer></Footer>

        </div>
     );
}
 
export default Settings;