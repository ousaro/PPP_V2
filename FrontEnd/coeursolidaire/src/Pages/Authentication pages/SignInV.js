import { Link } from "react-router-dom"
import logo from "../../imgs/HomeLogo.png"
import igIcon from "../../imgs/InstagramIcon.png"
import fbIcon from "../../imgs/facebookIcon.png"
import inIcon from "../../imgs/LinkdinIcon.png"
import { useHistory } from "react-router-dom"


const SignInV = () => {

    const history=useHistory();

    const goBack=()=>{
        history.goBack();
    }

    const changePg=(path)=>{
        history.push(path)
    }

    return ( 

        <div className="AuthenticationPg SignInVPg">



            <main className="Auth_Content SignInV_Content">

                        
            <form className="Auth_Content_Form SignInV_Content_Form" onSubmit={(e)=>    
                        {e.preventDefault()
                        changePg("/ProfileV")}}>

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
                       
                        <input type="text" placeholder="Email" required/>
                        <input type="date" required/>

                        <p className="SignInV_Data_GenderTitle">Gender</p>
                        <div className="SignInV_Data_Gender">
                            <input type="radio" name="Gender" required/>
                            <label htmlFor="" >Female</label>
                            <input type="radio" name="Gender" required/>
                            <label htmlFor="" >Male</label>
                        </div>
                        
                        <div className="SignInV_Data_Pass">
                            <input type="password" placeholder="Password" required/>
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
                                <p>Already have an account? <Link to="/LogIn">LogIn</Link></p>
                            </section>
                        </div>


                        <button type="submit" className="Auth_Form_Btn SignInV_Form_Btn">Sign In</button>


                    </div>
                    
            
                </section>
                

                <section className="Auth_Form_Footer SignInV_Form_Footer">

                    <figure className="Auth_Form_Logo SignInV_Form_Logo">
                        <img src={logo} alt="Logo" width="109" height="105"/>
                    </figure>

                    <div className="Auth_Form_SocialLinks SignInV_Form_SocialLinks">
                        <ul>
                            <li><a href="/"  rel="noopener noreferrer"><img src={inIcon} alt="Linkdin" width="40" height="38" /></a></li>
                            <li><a href="/"  rel="noopener noreferrer"><img src={fbIcon} alt="Facebook" width="40" height="38"/></a></li>
                            <li><a href="/"  rel="noopener noreferrer"><img src={igIcon} alt="Instagram" width="40" height="38"/></a></li>
                        </ul>
                    </div>



                </section>

                
            </form>

            </main>

            <footer className="Footer Auth_Footer SignInV_Footer">
            <p>&copy; 2024 CoeurSolidaire- All Rights Reserved</p>
            </footer>


        </div>
     );
}
 
export default SignInV;