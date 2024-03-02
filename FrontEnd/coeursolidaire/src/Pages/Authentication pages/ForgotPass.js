import { useHistory } from "react-router-dom"
import Footer from "../Main Components/Footer"
import FormFooter from "../Main Components/FormFooter"


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
                    

                    <FormFooter></FormFooter>

                    
                </form>

            </main>

            <Footer></Footer>
        </div>
     );
}
 
export default ForgotPass;