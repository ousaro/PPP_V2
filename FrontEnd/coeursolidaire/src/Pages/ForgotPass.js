
import logo from "../imgs/HomeLogo.png"
import igIcon from "../imgs/InstagramIcon.png"
import fbIcon from "../imgs/facebookIcon.png"
import inIcon from "../imgs/LinkdinIcon.png"
import { useHistory } from "react-router-dom"


const ForgotPass = () => {

    const history=useHistory();

    const goBack=()=>{
        history.goBack();
    }

    return ( 
        <div className="AuthenticationPg ForgotPass">

            <main className="Auth_Content ForgotPass_Content">

               
                <form className="Auth_Content_Form ForgotPass_Content_Form" onSubmit={(e)=>    
                            {e.preventDefault()
                            alert("log in success")}}>

                    <div className="Auth_Form_BackArrow ForgotPass_Form_BackArrow" onClick={goBack}></div>

                    <section className="Auth_Form_Header ForgotPass_Form_Header">
                        <h1>Forgot Password</h1>
                    </section>

                    <section className="Auth_Form_Content ForgotPass_Form_Content">

                        <p>Please fill your information below</p>

                        <section className="Auth_Form_Data ForgotPass_Form_Data">
                            <input type="text" placeholder="Email" required/>
                            <input type="tel" placeholder="Phone Number" required/>
                        </section>

                        <section className="Auth_Form_Terms  ForgotPass_Form_Terms">
                            <input type="checkbox"  required/>
                            <p>I accept terms & privacy policy</p>
                        </section>
                        
                        <button type="submit" className="Auth_Form_Btn  ForgotPass_Form_Btn">Submit</button>

                    </section>
                    

                    <section className="Auth_Form_Footer ForgotPass_Form_Footer">

                        <figure className="Auth_Form_Logo ForgotPass_Form_Logo">
                            <img src={logo} alt="Logo" width="109" height="105"/>
                        </figure>

                        <div className="Auth_Form_SocialLinks ForgotPass_Form_SocialLinks">
                            <ul>
                                <li><a href="/"  rel="noopener noreferrer"><img src={inIcon} alt="Linkdin" width="40" height="38" /></a></li>
                                <li><a href="/"  rel="noopener noreferrer"><img src={fbIcon} alt="Facebook" width="40" height="38"/></a></li>
                                <li><a href="/"  rel="noopener noreferrer"><img src={igIcon} alt="Instagram" width="40" height="38"/></a></li>
                            </ul>
                        </div>



                    </section>

                    
                </form>

            </main>

            <footer className="Auth_Footer LogIn_Footer">
                <p>2024 CoeurSolidaire- All Rights Reserved</p>
            </footer>
        </div>
     );
}
 
export default ForgotPass;