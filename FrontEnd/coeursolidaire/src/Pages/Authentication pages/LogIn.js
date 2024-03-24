import { Link, useLocation } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Footer from "../Main Components/Footer"
import FormFooter from "../Main Components/FormFooter"
import { useVLogin } from "../../Hooks/useVLogin"
import { useALogin } from "../../Hooks/useALogin"
import { useState } from "react"


const LogIn = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false);

    const {vlogin , verror, visLoading, vnext } = useVLogin()
    const {alogin , aerror, aisLoading, anext } = useALogin()
    const history=useHistory();
    const location = useLocation();
    const currentPath = location.pathname;


    const goBack=()=>{
        history.goBack();
    }

    const changePg=(path)=>{
        history.push(path)
    }

  

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const OnSubmitHandler= async (e)=>{
        e.preventDefault();
        
      
        if(currentPath==="/Volounteer/LogIn"){
            
            await vlogin(email, password)

            if(vnext){

                changePg('/Volounteer/ProfileV');
    
            }
        }

        if(currentPath==="/Association/LogIn"){

            await alogin(email, password)

            if(anext){
                changePg('/Association/ProfileA')
            }
         
        }
       

        
    }

  

    return ( 
        <div className="AuthenticationPg LogInPg">

            <main className="Auth_Content LogIn_Content">

               
                <form className="Auth_Content_Form LogIn_Content_Form" onSubmit={(e)=>    
                            {OnSubmitHandler(e)}}>

                    <div className="Auth_Form_BackArrow LogIn_Form_BackArrow" onClick={goBack}></div>

                    <section className="Auth_Form_Header LogIn_Form_Header">
                        <h1>Log In</h1>
                    </section>

                    <section className="Auth_Form_Content LogIn_Form_Content">

                        <p>Please fill your information below</p>

                        <section className="Auth_Form_Data LogIn_Form_Data">
                            <input type="text" placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}}/>
                            <div className="LogIn_Form_Data_Password">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
                                <input type="checkbox" className="PasswordVisibility_Chechbox" onChange={togglePasswordVisibility}/>
                            </div>
                        </section>

                        <section className="Auth_Form_Terms  LogIn_Form_Terms">
                            <input type="checkbox"  required/>
                            <p>I accept terms & privacy policy</p>
                        </section>
                        

                        <section className="LogIn_Form_SignIn">
                            <p>Not a member? <Link to={currentPath==="/Volounteer/LogIn" ? '/SignInV' : '/SignInA'}>SignIn</Link></p>
                        </section>
                       
                        <button type="submit" className="Auth_Form_Btn  LogIn_Form_Btn" disabled={currentPath==="/Volounteer/LogIn" ?visLoading : aisLoading}>Log In</button>

                    </section>
                    
                    {currentPath==="/Volounteer/LogIn" ? (verror && <div className="Post_Footer">{verror}</div>) :  (aerror && <div className="Post_Footer">{aerror}</div>)}
                    
                  

                    <FormFooter></FormFooter>

                    
                </form>

            </main>

            <Footer></Footer>
        </div>
     );
}
 
export default LogIn;