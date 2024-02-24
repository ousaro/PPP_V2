import logo from "../imgs/HomeLogo.png"
import HomeHero from "../imgs/HomeHero.png"



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
                    <img src={HomeHero} alt="HomeHero" width="777" height="420"/>
                </figure>

                <section className="Home_Content_Title">
                    <h1>Unifying <span className="NotBold">Hearts</span>, Empowering <span className="NotBold">Lives</span></h1>
                </section>

                <section className="Home_Content_Btn">
                    <button className="Btn_Volunteer">Are you a volounteer?</button>
                    <button className="Btn_Association">Are you an association?</button>
                </section>

            </main>

            <footer className="Home_Footer">
                <ul>
                    <li>About</li>
                    <li>Privacy Policy</li>
                    <li>Terms of services</li>
                </ul>
                <p>2024 CoeurSolidaire- All Rights Reserved</p>
            </footer>
        </div>
    );
}
 
export default Home;