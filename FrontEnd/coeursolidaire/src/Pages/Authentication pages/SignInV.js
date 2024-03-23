import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Footer from "../Main Components/Footer"
import FormFooter from "../Main Components/FormFooter"
import { useSignIn } from "../../Hooks/useSignIn"
import { useState } from "react"



const SignInV = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const history=useHistory();
    const {signup, error, isLoading , next} = useSignIn();

    const goBack=()=>{
        history.goBack();
    }

    const changePg=(path)=>{
        history.push(path)
    }

    const OnSubmitHandler= async (e)=>{
        e.preventDefault();
        

        await signup(email, password);
        

        if(next){
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
                            <input type="password" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
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


                        <button type="submit" className="Auth_Form_Btn SignInV_Form_Btn" disabled={isLoading}>Sign In</button>



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
 
export default SignInV;