import { useHistory} from "react-router-dom"
import NavBar from "../Main Components/NavBar"
import Footer from "../Main Components/Footer"
import FormFooter from "../Main Components/FormFooter"




const Settings = () => {



    const history=useHistory();

    const goBack = ()=>{
        history.goBack();
    }

    const ChangePg=(e)=>{
        history.push(e);
    }


    return ( 
        <div className="ProfilePg SettingsPg">

            <NavBar></NavBar>

            <main className="Profile_Content Setting_Content">

                <div className="Profile_Content_Form">

                    <h1 className="Setting_Title">Setting</h1>

                    <div className="Profile_Form_BackArrow Settings_BackArrow" onClick={goBack}></div>

                   <div className="Setting_Btns">
                        <button type="button" className="Setting_Btn  Setting_DeleteBtn">Delete my account</button>
                        <button type="button" className="Setting_Btn   Setting_DesactivateBtn" >Desactivate my account</button>
                        <button type="button" className="Setting_Btn  Setting_ChangePassBtn">Change my password</button>
                        <button type="button" className="Setting_Btn Setting_LogOutBtn" onClick={()=>ChangePg("/")} >Log out</button>
                   </div>
                    <FormFooter></FormFooter>

                </div>
                

            </main>

            <Footer></Footer>

        </div>
     );
}
 
export default Settings;