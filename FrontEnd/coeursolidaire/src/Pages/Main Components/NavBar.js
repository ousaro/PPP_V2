import ProfileLogo from "../../imgs/ProfileLogo.png"
import SettingIcon from "../../imgs/settingIcon.png"
import HomeIcon from "../../imgs/HomeIcon.png"
import MessangerIcon from "../../imgs/MessangerIcon.png"
import NotificationIcon from "../../imgs/NotificationIcon.png"
import { Link } from "react-router-dom"

const NavBar = () => {
    return ( 

        <nav className="NavBar">

            <figure>
                <Link to="/Settings"><img src={SettingIcon} alt="settingIcon" width="39" height="39"/></Link>
            </figure>

            <figure>
                <Link to="/AuserHome"><img src={HomeIcon} alt="HomeIcon" width="39" height="39"/></Link>
            </figure>

            <figure className="Nav_Logo">
                <img src={ProfileLogo} alt="Logo" width="262" height="236"/>
            </figure>

            <figure>
                <Link to="#"><img src={MessangerIcon} alt="MessangerIcon" width="39" height="39"/></Link>
            </figure>

            <figure>
                <Link to="#"><img src={NotificationIcon} alt="NotificationIcon" width="39" height="39"/></Link>
            </figure>

            <Link to="/ProfileV"><div className="Nav_ProfileIcon"></div></Link>
        </nav>

     );
}
 
export default NavBar;