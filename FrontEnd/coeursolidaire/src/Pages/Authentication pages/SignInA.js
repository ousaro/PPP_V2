import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Footer from "../Main Components/Footer"
import FormFooter from "../Main Components/FormFooter"
import { useASignUp } from "../../Hooks/useASignUp"
import { useState } from "react"

const SignInA = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState()

    const history=useHistory();
    const {asignup, aerror, aisLoading , anext} = useASignUp();

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
        

        await asignup(email, password, name);
        

        if(anext){
            changePg("/Association/ProfileA");
        }

    }
    

    return ( 
        <div className="AuthenticationPg SignInVPg">



            <main className="Auth_Content SignInA_Content">

                        
            <form className="Auth_Content_Form SignInA_Content_Form" onSubmit={(e)=>    
                        {OnSubmitHandler(e)}}>

                <div className="Auth_Form_BackArrow SignInA_Form_BackArrow" onClick={goBack}></div>

                <section className="Auth_Form_Header SignInA_Form_Header">
                    <h1>Sign in (Association)</h1>
                </section>

                <section className="Auth_Form_Content SignInA_Form_Content">

                    <p>Please fill your information below</p>

                    <section className="Auth_Form_Data SignInA_Form_Data">
                        <div className="SignInA_Data_FullName">
                            <input type="text" placeholder="Association name" onChange={(e)=>{setName(e.target.value)}} required/>
                            <input type="address" placeholder="Address" required/>
                        </div>
                    
                        
                        <div className="SignInA_Data_EmailCity">
                            <input type="text" placeholder="Email" id="email" required onChange={(e)=>{setEmail(e.target.value)}}/>
                            <input type="text" placeholder="City"  id="city" required/>
                        </div>

                        
                        <div className="SignInA_Data_Pass">
                           <div className="SignIn_Data_PassCheckeer">
                                <input type={showPassword ? "text" : "password"} className="SignInA_Data_Pass_input" 
                                placeholder="Password" 
                                required 
                                onChange={(e)=>{setPassword(e.target.value)}}/>
                                <input type="checkbox" className="PasswordVisibility_Chechbox" onChange={togglePasswordVisibility}/>
                           </div>
                            <input type="password" placeholder="confirm Password" required/>
                        </div>
                        
                        <textarea name="Description" placeholder="Description of the main goal of the association" required></textarea>
        
                        
                    </section>


                    <div className="SignInA_Form_footer">

                        <button type="submit" className="Auth_Form_Btn SignInA_Form_Btn" disabled={aisLoading}>Sign In</button>

                        <div>
                            <section className="Auth_Form_Terms SignInA_Form_Terms">
                                <input type="checkbox"  required/>
                                <p>I accept terms & privacy policy</p>
                            </section>
                        

                            <section className="SignInA_Form_LogIn">
                                <p>Already have an account? <Link to="/Association/LogIn">LogIn</Link></p>
                            </section>
                        </div>

                    </div>
                    
            
                </section>
                
                {aerror && <div className="Post_Footer">{aerror}</div>}

                <FormFooter></FormFooter>

                
            </form>

            </main>

            <Footer></Footer>


        </div>
     );
}
 
export default SignInA;