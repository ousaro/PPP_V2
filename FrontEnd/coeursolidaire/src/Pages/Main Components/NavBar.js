import ProfileLogo from "../../imgs/ProfileLogo.png"
import SettingIcon from "../../imgs/settingIcon.png"
import HomeIcon from "../../imgs/HomeIcon.png"
import MessangerIcon from "../../imgs/MessangerIcon.png"
import NotificationIcon from "../../imgs/NotificationIcon.png"
import { Link,useLocation } from "react-router-dom"
import { useAuthContext } from "../../Hooks/useAuthContext"


const NavBar = () => {

   const location = useLocation()
   const currentPath = location.pathname;
   const {user} = useAuthContext()


    return ( 

        <nav className="NavBar">

            <figure className="Nav_Setting">
                <Link to={currentPath.startsWith("/Volounteer") ? '/Volounteer/Settings' : '/Association/Settings'}><img src={SettingIcon} alt="settingIcon" width="39" height="39"/></Link>
            </figure>

            <figure className="Nav_Home">
                <Link to={currentPath.startsWith("/Volounteer") ? '/Volounteer/VuserHome' : '/Association/AuserHome'}><img src={HomeIcon} alt="HomeIcon" width="39" height="39"/></Link>
            </figure>

            <figure className="Nav_Logo">
                <img src={ProfileLogo} alt="Logo" width="262" height="236"/>
            </figure>

            <figure className="Nav_Messanger">
                <Link to="#"><img src={MessangerIcon} alt="MessangerIcon" width="39" height="39"/></Link>
            </figure>

            <figure className="Nav_Notification">
                <Link to="#"><img src={NotificationIcon} alt="NotificationIcon" width="39" height="39"/></Link>
            </figure>

            <Link className="Nav_Profile" to={currentPath.startsWith("/Volounteer") ? '/Volounteer/ProfileV' : '/Association/ProfileA'}>{user.photo ? <div className="Nav_ProfileIcon_photo"><img src={user.photo} alt="profile"/></div>:  <div className="Nav_ProfileIcon"></div>}</Link>
        </nav>

     );
}
 
export default NavBar;