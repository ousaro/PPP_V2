import logo from "../../imgs/HomeLogo.png"
import igIcon from "../../imgs/InstagramIcon.png"
import fbIcon from "../../imgs/facebookIcon.png"
import inIcon from "../../imgs/LinkdinIcon.png"
import { useAuthContext } from "../../Hooks/useAuthContext"


const FormFooter = () => {

    const {user} = useAuthContext();
    return ( 

        <section className={user ? "Form_Footer" : "Form_Footer Form_Footer_Auth"}>

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
     );
}
 
export default FormFooter;