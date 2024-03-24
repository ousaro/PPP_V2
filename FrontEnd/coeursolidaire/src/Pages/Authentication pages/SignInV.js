import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Footer from "../Main Components/Footer"
import FormFooter from "../Main Components/FormFooter"
import { useVSignUp } from "../../Hooks/useVSignUp"
import { useState } from "react"



const SignInV = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false);

    const history=useHistory();
    const {vsignup, verror, visLoading , vnext} = useVSignUp();

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
        

        await vsignup(email, password);
        

        if(vnext){
           changePg("/Volounteer/ProfileV");
        }
     

    }

    return ( 

        <div className="AuthenticationPg SignInVPg">



            <main className="Auth_Content SignInV_Content">

                        
            <form className="Auth_Content_Form SignInV_Content_Form" onSubmit={(e)=>    
                        {OnSubmitHandler(e)}}>

                <div className="Auth_Form_BackArrow SignInV_Form_BackArrow" onClick={goBack}></div>

                <section className="Auth_Form_Header SignInV_Form_Header">
                    <h1>Sign in (Volounteer)</h1>
                </section>

                <section className="Auth_Form_Content SignInV_Form_Content">

                    <p>Please fill your information below</p>

                    <section className="Auth_Form_Data SignInV_Form_Data">
                        <div className="SignInV_Data_FullName">
                            <input type="text" placeholder="First name" required/>
                            <input type="text" placeholder="Last name" required/>
                        </div>
                       
                        <input type="text" placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type="date" required/>

                        <p className="SignInV_Data_GenderTitle">Gender</p>
                        <div className="SignInV_Data_Gender">
                            <input type="radio" name="Gender" required/>
                            <label htmlFor="" >Female</label>
                            <input type="radio" name="Gender" required/>
                            <label htmlFor="" >Male</label>
                        </div>
                        
                        <div className="SignInV_Data_Pass">
                            <div className="SignIn_Data_PassCheckeer">
                                    <input type={showPassword ? "text" : "password"} className="SignInA_Data_Pass_input" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
                                    <input type="checkbox" className="PasswordVisibility_Chechbox" onChange={togglePasswordVisibility}/>
                            </div>
                            <input type="password" placeholder="confirm Password" required/>
                        </div>
                        
                        
                    </section>


                    <div className="SignInV_Form_footer">
                        <div>
                            <section className="Auth_Form_Terms SignInV_Form_Terms">
                                <input type="checkbox"  required/>
                                <p>I accept terms & privacy policy</p>
                            </section>
                        

                            <section className="SignInV_Form_LogIn">
                                <p>Already have an account? <Link to="/Volounteer/LogIn">LogIn</Link></p>
                            </section>
                        </div>


                        <button type="submit" className="Auth_Form_Btn SignInV_Form_Btn" disabled={visLoading}>Sign In</button>



                    </div>
                    
            
                </section>
                
                {verror && <div className="Post_Footer">{verror}</div>}
                
                <FormFooter></FormFooter>
                
            </form>

            </main>

            <Footer></Footer>


        </div>
     );
}
 
export default SignInV;