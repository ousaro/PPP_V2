import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Footer from "../Main Components/Footer"
import FormFooter from "../Main Components/FormFooter"



const SignInA = () => {

    const history=useHistory();

    const goBack=()=>{
        history.goBack();
    }

    const changePg=(path)=>{
        history.push(path)
    }

    return ( 
        <div className="AuthenticationPg SignInVPg">



            <main className="Auth_Content SignInA_Content">

                        
            <form className="Auth_Content_Form SignInA_Content_Form" onSubmit={(e)=>    
                        {e.preventDefault()
                        changePg("/ProfileA")}}>

                <div className="Auth_Form_BackArrow SignInA_Form_BackArrow" onClick={goBack}></div>

                <section className="Auth_Form_Header SignInA_Form_Header">
                    <h1>Sign in (Association)</h1>
                </section>

                <section className="Auth_Form_Content SignInA_Form_Content">

                    <p>Please fill your information below</p>

                    <section className="Auth_Form_Data SignInA_Form_Data">
                        <div className="SignInA_Data_FullName">
                            <input type="text" placeholder="Association name" required/>
                            <input type="address" placeholder="Address" required/>
                        </div>
                    
                        
                        <div className="SignInA_Data_EmailCity">
                            <input type="text" placeholder="Email" id="email" required/>
                            <input type="text" placeholder="City"  id="city" required/>
                        </div>

                        
                        <div className="SignInA_Data_Pass">
                            <input type="password" placeholder="Password" required/>
                            <input type="password" placeholder="confirm Password" required/>
                        </div>
                        
                        <textarea name="Description" placeholder="Description of the main goal of the association" required></textarea>
        
                        
                    </section>


                    <div className="SignInA_Form_footer">

                        <button type="submit" className="Auth_Form_Btn SignInA_Form_Btn">Sign In</button>

                        <div>
                            <section className="Auth_Form_Terms SignInA_Form_Terms">
                                <input type="checkbox"  required/>
                                <p>I accept terms & privacy policy</p>
                            </section>
                        

                            <section className="SignInA_Form_LogIn">
                                <p>Already have an account? <Link to="/LogIn">LogIn</Link></p>
                            </section>
                        </div>

                    </div>
                    
            
                </section>
                

                <FormFooter></FormFooter>

                
            </form>

            </main>

            <Footer></Footer>


        </div>
     );
}
 
export default SignInA;