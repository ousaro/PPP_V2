import { Link, useLocation } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Footer from "../Main Components/Footer"
import FormFooter from "../Main Components/FormFooter"
import { useLogin } from "../../Hooks/useLogin"
import { useState } from "react"


const LogIn = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const {login , error, isLoading, next } = useLogin()
    const history=useHistory();
    const location = useLocation();
    const currentPath = location.pathname;


    const goBack=()=>{
        history.goBack();
    }

    const changePg=(path)=>{
        history.push(path)
    }


    const OnSubmitHandler= async (e)=>{
        e.preventDefault();
        
        await login(email, password)

        if(next){

            changePg(currentPath==="/Volounteer/LogIn" ? '/Volounteer/ProfileV' : '/Association/ProfileA');

        }
    }

  

    return ( 
        <div className="AuthenticationPg LogInPg">

            <main className="Auth_Content LogIn_Content">

               
                <form className="Auth_Content_Form LogIn_Content_Form" onSubmit={(e)=>    
                            {OnSubmitHandler(e)}}>

                    <div className="Auth_Form_BackArrow LogIn_Form_BackArrow" onClick={goBack}></div>

                    <section className="Auth_Form_Header LogIn_Form_Header">
                        <h1>Log In</h1>
                    </section>

                    <section className="Auth_Form_Content LogIn_Form_Content">

                        <p>Please fill your information below</p>

                        <section className="Auth_Form_Data LogIn_Form_Data">
                            <input type="text" placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}}/>
                            <input type="password" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
                        </section>

                        <section className="LogIn_Form_ForgotPass">
                            <p><Link to="/ForgotPass">Forgot Password?</Link></p>
                        </section>

                        <section className="Auth_Form_Terms  LogIn_Form_Terms">
                            <input type="checkbox"  required/>
                            <p>I accept terms & privacy policy</p>
                        </section>
                        

                        <section className="LogIn_Form_SignIn">
                            <p>Not a member? <Link to={currentPath==="/Volounteer/LogIn" ? '/SignInV' : '/SignInA'}>SignIn</Link></p>
                        </section>
                       
                        <button type="submit" className="Auth_Form_Btn  LogIn_Form_Btn" disabled={isLoading}>Log In</button>

                    </section>
                    
                    {error && <div className="Post_Footer">{error}</div>}

                    <FormFooter></FormFooter>

                    
                </form>

            </main>

            <Footer></Footer>
        </div>
     );
}
 
export default LogIn;