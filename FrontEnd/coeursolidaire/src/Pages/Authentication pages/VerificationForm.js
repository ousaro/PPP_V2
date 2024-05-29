import { useHistory } from "react-router-dom"
import Footer from "../Main Components/Footer"
import FormFooter from "../Main Components/FormFooter"
import { useSignUp } from "../../Hooks/useSignUp"
import { useState } from "react"
import { FaInfoCircle } from 'react-icons/fa';



const VerificationForm = () => {

    const [user, setUser] = useState(null);
    const [showInfo, setShowInfo] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        registrationNumber: '',
        countryOfRegistration: '',
        physicalAddress: '',
        phoneNumber: '',
        website: '',
        file: null
      });

    const history=useHistory();
    const {signup, error, isLoading , next} = useSignUp()

    const goBack=()=>{
        history.goBack();
    }

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

             //await signup(displayName,email,password, confirmPass,profilePicture,userType);
            
            }
    }

    
    
      const handleChange = (e) => {
        const { name,files, value } = e.target;
        if(formData[name]==="file"){
            setFormData({ ...formData, [name]: files[0] });
        }
        else{
            setFormData({ ...formData, [name]: value });
        }
        
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form data submitted:', formData);
      };
    

    return (

        <div className="AuthenticationPg SignUpPg">



            <main className="Auth_Content  .verificationForm_Content">

                        
            <form className="verificationForm_Content_Form" onSubmit={(e)=>    
                        {OnSubmitHandler(e)}}>

                <div className="verificationForm_Form_BackArrow" onClick={goBack}></div>

                <section className="Auth_Form_Header verificationForm_Form_Header">
                    <h1>Verification Form</h1>
                </section>

                <section className="Auth_Form_Content verificationForm_Form_Content">

                    <section className="verificationForm_Form_Data">

                        <div className="row1">
                            <label>
                                Name:<br></br>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                                <br></br>
                            </label>
                            <label>
                                Registration Number:<br></br>
                                <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} required />
                                <br></br>
                            </label>
                            <label>
                                Country of Registration:<br></br>
                                <input type="text" name="countryOfRegistration" value={formData.countryOfRegistration} onChange={handleChange} required />
                                <br></br>
                            </label>
                            <label>
                                Physical Address:<br></br>
                                <input type="text" name="physicalAddress" value={formData.physicalAddress} onChange={handleChange} required />
                                <br></br>
                            </label>
                            
                          
                        </div>

                        <div className="row2">
                            <label>
                                Phone Number:<br></br>
                                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                                <br></br>
                            </label>
                            <label>
                                Website:<br></br>
                                <input type="url" name="website" value={formData.website} onChange={handleChange} required />
                                <br></br>
                            </label>
                            <label>
                                Upload Document:
                                <input type="file" name="file" accept=".pdf,.doc,.docx" onChange={handleChange} required />
                                <FaInfoCircle onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)} />
                                {showInfo && (
                                <div style={{ marginLeft: '10px', display: 'inline' }}>
                                    <span>Click here to register your account</span>
                                </div>
                                )}
                            </label>
                        </div>                
                        
                    </section>


                    <div className="verificationForm_Form_footer">
                        <button type="submit" className="Auth_Form_Btn verificationForm_Form_Btn" disabled={isLoading} >Submit</button>
                        
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
 
export default VerificationForm;