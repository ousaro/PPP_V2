import { useHistory } from "react-router-dom"
import Footer from "../Main Components/Footer"
import FormFooter from "../Main Components/FormFooter"
import { useSignUp } from "../../Hooks/useSignUp"
import { useState, useEffect } from "react"



const SignUP = () => {

    const [userType, setUserType] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPass, setConfirmPass] = useState('')
    const [showCofirmPassword, setShowConfirmPassword] = useState(false);
    const [user, setUser] = useState(null);


    const history=useHistory();
    const {signup, error, isLoading , next} = useSignUp()

    const goBack=()=>{
        history.goBack();
    }

    const changePg=(path)=>{
        history.push(path)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showCofirmPassword);
    };

    

    useEffect(() => {
        let params = new URLSearchParams(window.location.search);
        let userData = null;

        try {
            userData = JSON.parse(params.get('user'));
        } catch (error) {
            console.error('Failed to parse user data:', error);
        }

        setUser(userData);
    }, []); 


    useEffect(() => {
        if (next && user) {
            if (userType === 'volounteer') {
                changePg('/Volounteer/ProfileV');
            }
            if (userType === 'association') {
                changePg('/Association/ProfileA');
            }
        }
    }, [next, userType, user]);

    const OnSubmitHandler= async (e)=>{
        e.preventDefault();
        if (user) {
            // Access specific profile information
             //const id = user.id;
             const displayName = user.displayName;
             const email = user.emails[0].value;  // Assuming there's at least one email
             //const givenName = user.name.givenName;
             //const familyName = user.name.familyName;
             const profilePicture = user.photos[0].value;  // Assuming there's at least one photo

             await signup(displayName,email,password, confirmPass,profilePicture,userType);
            
            }
    }

    return (

        <div className="AuthenticationPg SignUpPg">



            <main className="Auth_Content  SignUp_Content">

                        
            <form className="Auth_Content_Form SignUp_Content_Form" onSubmit={(e)=>    
                        {OnSubmitHandler(e)}}>

                <div className="Auth_Form_BackArrow SignUp_Form_BackArrow" onClick={goBack}></div>

                <section className="Auth_Form_Header SignUp_Form_Header">
                    <h1>Sign Up!</h1>
                </section>

                <section className="Auth_Form_Content SignUp_Form_Content">

                    <section className="Auth_Form_Data SignUp_Form_Data">

                        <select className="SignUp_Form_UserType" placeholder="User Type" required onChange={(e)=>{setUserType(e.target.value)}}>
                            <option value="User Type" defaultValue={"User Type"} disabled >User Type</option>
                            <option value="volounteer">Volounteer</option>
                            <option value="association">Association</option>
                        </select>
                        
                        <div className="SignUp_Data_Pass">
                            <div className="SignUp_Data_PassCheckeer">
                                    <input type={showPassword ? "text" : "password"} 
                                    className="SignUp_Data_Pass_input" 
                                    placeholder="Password"
                                    onChange={(e)=>{setPassword(e.target.value)}}  required />
                                    <input type="checkbox" className="SignUp_PasswordVisibility_Chechbox" onChange={togglePasswordVisibility}/>
                            </div>

                            <div className="SignUp_Data_PassCheckeer">
                                    <input type={showCofirmPassword ? "text" : "Password"} 
                                    className="SignUp_Data_Pass_input" 
                                    placeholder="Confirm Password"
                                    onChange={(e)=>{setConfirmPass(e.target.value)}}  required />
                                    <input type="checkbox" className="SignUp_PasswordVisibility_Chechbox" onChange={toggleConfirmPasswordVisibility}/>
                            </div>
                        </div>
                        
                    </section>


                    <div className="SignUp_Form_footer">
                        <button type="submit" className="Auth_Form_Btn SignUp_Form_Btn" disabled={isLoading}>Submit</button>
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
 
export default SignUP;