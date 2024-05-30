import { useHistory } from "react-router-dom"
import Footer from "../Main Components/Footer"
import { useState } from "react"
import { FaInfoCircle } from 'react-icons/fa';
import logo from "../../imgs/HomeLogo.png"
import igIcon from "../../imgs/InstagramIcon.png"
import fbIcon from "../../imgs/facebookIcon.png"
import inIcon from "../../imgs/LinkdinIcon.png"
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useVerifyAccount } from "../../Hooks/useVerifyAccount";



const VerificationForm = () => {

    const {user}= useAuthContext()
    const [showInfo, setShowInfo] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        registrationNumber: '',
        countryOfRegistration: '',
        physicalAddress: '',
        phoneNumber: '',
        website: '',
        file: null,
        email: user.email,
        verificationToken: user._verificationToken 
      });

    const history=useHistory();
    const {verifyAccount, error, isLoading , next} = useVerifyAccount()

    const goBack=()=>{
        history.goBack();
    }

    const changePg=(path)=>{
        history.push(path)
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
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        await verifyAccount(formData);

        if(next){
            changePg("/")
        }
      
        // Add form submission logic here
        console.log('Form data submitted:', formData);
        console.log('User submitted:', user);
        console.log("verificationToken", user.verificationToken)
      };

      

    return (

        <div className="AuthenticationPg SignUpPg">



            <main className="Auth_Content  .verificationForm_Content">

                        
            <form className="verificationForm_Content_Form" onSubmit={(e)=>    
                        {handleSubmit(e)}}>

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
                            <label className="custom-button">
                                Upload Document:
                                <input type="file" name="file" style={ {display: "none"}} accept=".pdf,.doc,.docx" onChange={handleChange} required />
                                <FaInfoCircle className="info-icon" onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)} />
                                {showInfo && (
                                <div className="infoPopupStyle">
                                     <p className="infoTextStyle">
                                        <h1 >The document should contain: </h1><br />
                                        <ol>
                                            <li>Board Members <span>*</span></li>
                                            <li>Financial Statements <span>*</span></li>
                                            <li>Mission <span>*</span></li>
                                            <li>Activities <span>*</span></li>
                                            <li>Partners <span>*</span></li>
                                            <li>References <span>*</span></li>
                                            <li>Testimonials <span>*</span></li>
                                        </ol>
                                    </p>
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
                
                <section className="Form_Footer verification_Footer" >

                        <figure className="Form_Footer_Logo ">
                            <img src={logo} alt="Logo" width="109" height="105"/>
                        </figure>

                        <div className="Form_Footer_SocialLinks">
                            <ul>
                                <li><a href="/"  rel="noopener noreferrer"><img src={inIcon} alt="Linkdin" width="40" height="38" /></a></li>
                                <li><a href="/"  rel="noopener noreferrer"><img src={fbIcon} alt="Facebook" width="40" height="38"/></a></li>
                                <li><a href="/"  rel="noopener noreferrer"><img src={igIcon} alt="Instagram" width="40" height="38"/></a></li>
                            </ul>
                        </div>

                </section>
                
            </form>

            </main>

            <Footer></Footer>


        </div>
     );
}
 
export default VerificationForm;