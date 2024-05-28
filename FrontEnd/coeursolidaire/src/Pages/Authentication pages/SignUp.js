import { useHistory } from "react-router-dom"
import Footer from "../Main Components/Footer"
import FormFooter from "../Main Components/FormFooter"
import { useLogin } from "../../Hooks/useLogin"
import { useAuthContext } from "../../Hooks/useAuthContext"
import { useState } from "react"



const SignUP = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const {user} = useAuthContext()
    const apiUrl = process.env.REACT_APP_API_URL;


    const history=useHistory();
    const {login, error, isLoading, next} = useLogin()

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
        

        await login(email,password);
        

        if(next){
            if(user.userType === "volounteer"){
                changePg("/Volounteer/ProfileV");
            }
            if(user.userType === "association"){
                changePg("/Association/ProfileA");
            }
        }
     

    }

    const googleAuth=()=>{
        window.open(apiUrl + "/api/users/google/callback", "_self") // "_self" to open in the same tab}
    }

    return ( 

        <div className="AuthenticationPg SignUpPg">



            <main className="Auth_Content  SignUp_Content">

                        
            <form className="Auth_Content_Form SignUp_Content_Form" onSubmit={(e)=>    
                        {OnSubmitHandler(e)}}>

                <div className="Auth_Form_BackArrow SignUp_Form_BackArrow" onClick={goBack}></div>

                <section className="Auth_Form_Header SignUp_Form_Header">
                    <h1>Sign Up!</h1>
                </section>

                <section className="Auth_Form_Content SignUp_Form_Content">

                    <section className="Auth_Form_Data SignUp_Form_Data">
                        <input type="text" placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}}/>
                        
                        <div className="SignUp_Data_Pass">
                            <div className="SignUp_Data_PassCheckeer">
                                    <input type={showPassword ? "text" : "password"} 
                                    className="SignUp_Data_Pass_input" 
                                    placeholder="Password"
                                    onChange={(e)=>{setPassword(e.target.value)}}  required />
                                    <input type="checkbox" className="SignUp_PasswordVisibility_Chechbox" onChange={togglePasswordVisibility}/>
                            </div>
                        </div>
                        
                    </section>


                    <div className="SignUp_Form_footer">
                        <div>
                            <section className="Auth_Form_Terms SignUp_Form_Terms">
                                <input type="checkbox"  required/>
                                <p>I accept terms & privacy policy</p>
                            </section>
                        </div>

                        <button type="submit" className="Auth_Form_Btn SignUp_Form_Btn" disabled={isLoading}>LogIn</button>

                        <div className="SignUp_or"><p>-or-</p></div>

                        <button type="submit" className="Auth_Form_Btn SignUp_Form_Btn google_btn" disabled={isLoading} onClick={googleAuth}>Sign In with google</button>


                    </div>
                    
            
                </section>
                
                {error && <div className="Post_Footer">{error}</div>}
                
                <FormFooter></FormFooter>
                
            </form>

            </main>

            <Footer></Footer>


        </div>
     );
}
 
export default SignUP;