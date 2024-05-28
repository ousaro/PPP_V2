import logo from "../imgs/HomeLogo.png"
import HomeHero from "../imgs/HomeHero.png"
import { Link } from "react-router-dom";



const Home = () => {
    return (  
        <div className="Home">

            <header className="Home_Header">
                <figure className="Home_Header_Logo">
                    <img src={logo} alt="logo" width="109" height="105"/>
                </figure>
            </header>

            <main className="Home_Content">
                <figure className="Home_Content_Hero">
                    <img src={HomeHero} alt="HomeHero" width="684" height="416"/>
                </figure>

                <section className="Home_Content_Title">
                    <h1>Unifying <span className="NotBold">Hearts</span>, Empowering <span className="NotBold">Lives</span></h1>
                </section>

                <section className="Home_Content_Btn">
                    <Link to="/SignUp"><button className="Btn_Volunteer">JOIN US!!</button></Link>
                    
                    {/* <Link to="/SignInA"><button className="Btn_Association" >Are you an association?</button></Link> */}
                </section>

            </main>

            <footer className="Home_Footer">
                <ul>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">Terms of services</Link></li>
                </ul>
                <p>2024 CoeurSolidaire- All Rights Reserved</p>
            </footer>
        </div>
    );
}
 
export default Home;