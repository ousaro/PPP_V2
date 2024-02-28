import { Link } from "react-router-dom"
import logo from "../imgs/HomeLogo.png"
import igIcon from "../imgs/InstagramIcon.png"
import fbIcon from "../imgs/facebookIcon.png"
import inIcon from "../imgs/LinkdinIcon.png"



const LogIn = () => {
    return ( 
        <div className="LogInPg">

            <main className="LogIn_Content">

               
                <form className="LogIn_Content_Form" onSubmit={(e)=>    
                            {e.preventDefault()
                            alert("log in success")}}>

                    <Link to="/"><div className="LogIn_Form_BackArrow"></div></Link>

                    <section className="LogIn_Form_Header">
                        <h1>Log In</h1>
                    </section>

                    <section className="LogIn_Form_Content">

                        <p>Please fill your information below</p>

                        <section className="LogIn_Form_Data">
                            <input type="text" placeholder="Email" required/>
                            <input type="password" placeholder="Password" required/>
                        </section>

                        <section className="LogIn_Form_ForgotPass">
                            <p><Link to="/">Forgot Password?</Link></p>
                        </section>

                        <section className="LogIn_Form_Terms">
                            <input type="checkbox"  required/>
                            <p>I accept terms & privacy policy</p>
                        </section>
                        

                        <section className="LogIn_Form_SignIn">
                            <p>Not a member? <Link to="/">SignIn</Link></p>
                        </section>
                       
                        <button type="submit" className="LogIn_Form_Btn">Log In</button>

                    </section>
                    

                    <section className="LogIn_Form_Footer">

                        <figure className="LogIn_Form_Logo">
                            <img src={logo} alt="Logo" width="109" height="105"/>
                        </figure>

                        <div className="LogIn_Form_SocialLinks">
                            <ul>
                                <li><a href="/"  rel="noopener noreferrer"><img src={inIcon} alt="Linkdin" width="40" height="38" /></a></li>
                                <li><a href="/"  rel="noopener noreferrer"><img src={fbIcon} alt="Facebook" width="40" height="38"/></a></li>
                                <li><a href="/"  rel="noopener noreferrer"><img src={igIcon} alt="Instagram" width="40" height="38"/></a></li>
                            </ul>
                        </div>



                    </section>

                    
                </form>

            </main>

            <footer className="LogIn_Footer">
                <p>2024 CoeurSolidaire- All Rights Reserved</p>
            </footer>
        </div>
     );
}
 
export default LogIn;