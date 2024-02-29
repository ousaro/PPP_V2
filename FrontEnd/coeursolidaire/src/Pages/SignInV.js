import { Link } from "react-router-dom"
import logo from "../imgs/HomeLogo.png"
import igIcon from "../imgs/InstagramIcon.png"
import fbIcon from "../imgs/facebookIcon.png"
import inIcon from "../imgs/LinkdinIcon.png"



const SignInV = () => {
    return ( 

        <div className="AuthenticationPg SignInVPg">



            <main className="Auth_Content SignIn_Content">

                        
            <form className="Auth_Content_Form SignIn_Content_Form" onSubmit={(e)=>    
                        {e.preventDefault()
                        alert("Sign in success")}}>

                <Link to="/"><div className="Auth_Form_BackArrow SignIn_Form_BackArrow"></div></Link>

                <section className="Auth_Form_Header SignIn_Form_Header">
                    <h1>Sign in (Volounteer)</h1>
                </section>

                <section className="Auth_Form_Content SignIn_Form_Content">

                    <p>Please fill your information below</p>

                    <section className="Auth_Form_Data SignIn_Form_Data">
                        <div className="SignIn_Data_FullName">
                            <input type="text" placeholder="First name" required/>
                            <input type="text" placeholder="Last name" required/>
                        </div>
                       
                        <input type="text" placeholder="Email" required/>
                        <input type="date" required/>

                        <p className="SignIn_Data_GenderTitle">Gender</p>
                        <div className="SignIn_Data_Gender">
                            <input type="radio" name="Gender" required/>
                            <label htmlFor="" >Female</label>
                            <input type="radio" name="Gender" required/>
                            <label htmlFor="" >Male</label>
                        </div>
                        
                        <div className="SignIn_Data_Pass">
                            <input type="password" placeholder="Password" required/>
                            <input type="password" placeholder="confirm Password" required/>
                        </div>
                        
                        
                    </section>


                    <div className="SignIn_Form_footer">
                        <div>
                            <section className="Auth_Form_Terms SignIn_Form_Terms">
                                <input type="checkbox"  required/>
                                <p>I accept terms & privacy policy</p>
                            </section>
                        

                            <section className="SignIn_Form_LogIn">
                                <p>Already have an account? <Link to="/LogIn">LogIn</Link></p>
                            </section>
                        </div>


                        <button type="submit" className="Auth_Form_Btn SignIn_Form_Btn">Sign In</button>


                    </div>
                    
            
                </section>
                

                <section className="Auth_Form_Footer SignIn_Form_Footer">

                    <figure className="Auth_Form_Logo SignIn_Form_Logo">
                        <img src={logo} alt="Logo" width="109" height="105"/>
                    </figure>

                    <div className="Auth_Form_SocialLinks SignIn_Form_SocialLinks">
                        <ul>
                            <li><a href="/"  rel="noopener noreferrer"><img src={inIcon} alt="Linkdin" width="40" height="38" /></a></li>
                            <li><a href="/"  rel="noopener noreferrer"><img src={fbIcon} alt="Facebook" width="40" height="38"/></a></li>
                            <li><a href="/"  rel="noopener noreferrer"><img src={igIcon} alt="Instagram" width="40" height="38"/></a></li>
                        </ul>
                    </div>



                </section>

                
            </form>

            </main>

            <footer className="Auth_Footer SignIn_Footer">
            <p>2024 CoeurSolidaire- All Rights Reserved</p>
            </footer>


        </div>
     );
}
 
export default SignInV;