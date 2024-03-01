import { Link } from "react-router-dom"
import logo from "../../imgs/HomeLogo.png"
import igIcon from "../../imgs/InstagramIcon.png"
import fbIcon from "../../imgs/facebookIcon.png"
import inIcon from "../../imgs/LinkdinIcon.png"
import { useHistory } from "react-router-dom"


const LogIn = () => {

    const history=useHistory();

    const goBack=()=>{
        history.goBack();
    }

    const changePg=(path)=>{
        history.push(path)
    }

    return ( 
        <div className="AuthenticationPg LogInPg">

            <main className="Auth_Content LogIn_Content">

               
                <form className="Auth_Content_Form LogIn_Content_Form" onSubmit={(e)=>    
                            {e.preventDefault()
                            changePg("/ProfileV")}}>

                    <div className="Auth_Form_BackArrow LogIn_Form_BackArrow" onClick={goBack}></div>

                    <section className="Auth_Form_Header LogIn_Form_Header">
                        <h1>Log In</h1>
                    </section>

                    <section className="Auth_Form_Content LogIn_Form_Content">

                        <p>Please fill your information below</p>

                        <section className="Auth_Form_Data LogIn_Form_Data">
                            <input type="text" placeholder="Email" required/>
                            <input type="password" placeholder="Password" required/>
                        </section>

                        <section className="LogIn_Form_ForgotPass">
                            <p><Link to="/ForgotPass">Forgot Password?</Link></p>
                        </section>

                        <section className="Auth_Form_Terms  LogIn_Form_Terms">
                            <input type="checkbox"  required/>
                            <p>I accept terms & privacy policy</p>
                        </section>
                        

                        <section className="LogIn_Form_SignIn">
                            <p>Not a member? <Link to="/SignInV">SignIn</Link></p>
                        </section>
                       
                        <button type="submit" className="Auth_Form_Btn  LogIn_Form_Btn">Log In</button>

                    </section>
                    

                    <section className="Auth_Form_Footer LogIn_Form_Footer">

                        <figure className="Auth_Form_Logo LogIn_Form_Logo">
                            <img src={logo} alt="Logo" width="109" height="105"/>
                        </figure>

                        <div className="Auth_Form_SocialLinks LogIn_Form_SocialLinks">
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
 
export default LogIn;