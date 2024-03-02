import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Footer from "../Main Components/Footer"
import FormFooter from "../Main Components/FormFooter"


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
                    

                    <FormFooter></FormFooter>

                    
                </form>

            </main>

            <Footer></Footer>
        </div>
     );
}
 
export default LogIn;