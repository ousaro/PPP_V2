import AboutHero from "../imgs/AboutHero.png"
import logo from "../imgs/HomeLogo.png"
import igIcon from "../imgs/InstagramIcon.png"
import fbIcon from "../imgs/facebookIcon.png"
import inIcon from "../imgs/LinkdinIcon.png"

import { Link } from "react-router-dom"

const About = () => {
    return ( 
        <div className="AboutPg">

            <header className="About_Header">
                <Link to="/"><button className="About_Home_Btn">Home</button></Link>
                <Link to="/LogIn"><button className="About_LogIn_Btn">Log In</button></Link>
            </header>

            <main className="About_Content">

                <figure className="About_Content_Hero">
                    <img src={AboutHero} alt="AboutHero" width="537" height="806"/>
                </figure>

                <section className="About_Content_Desc">
                    <figure className="About_Content_Desc_Logo">
                        <img src={logo} alt="Logo" width="109" height="105"/>
                    </figure>
                    <p>Welcome to CoeurSolidaire, a groundbreaking initiative dedicated to making a meaningful impact during times of crises. 
                    Our project is driven by the vision of creating a robust online platform that facilitates the seamless management of 
                    donations and collaborations in the face of natural disasters or humanitarian crises.</p>
                </section>

                <section className="About_Content_SocialLinks">
                    <ul>
                        <li><a href="/"  rel="noopener noreferrer"><img src={inIcon} alt="Linkdin" width="40" height="38" /></a></li>
                        <li><a href="/"  rel="noopener noreferrer"><img src={fbIcon} alt="Facebook" width="40" height="38"/></a></li>
                        <li><a href="/"  rel="noopener noreferrer"><img src={igIcon} alt="Instagram" width="40" height="38"/></a></li>
                    </ul>
                </section>
            </main>

            <footer className="About_Footer">
                <p>2024 CoeurSolidaire- All Rights Reserved</p>
            </footer>
        </div>
     );
}
 
export default About;