
import Home from "./Pages/Home"; 
import About from "./Pages/About";
import SignUp from "./Pages/Authentication pages/SignUp";
import UserType from "./Pages/Authentication pages/UserType"
import VerificationForm from "./Pages/Authentication pages/VerificationForm";
import ProfileV from "./Pages/Profiles/ProfileV";
import ProfileA from "./Pages/Profiles/ProfileA";
import Settings from "./Pages/feature pages/Settings";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import AuserHome from "./Pages/Users Home pages/AuserHome"
import VuserHome from "./Pages/Users Home pages/VuserHome";
import { useAuthContext } from "./Hooks/useAuthContext";
;

function App() {

  const {user}= useAuthContext()

  return (
    
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact>{!user ? <Home></Home> : user.userType==="volounteer" ? <Redirect to="/Volounteer/ProfileV"/> :<Redirect to="/Association/ProfileA"/>}</Route>
            <Route path="/About">{!user ? <About></About> : <Redirect to="/"/>}</Route>

            <Route path="/verificationForm"><VerificationForm></VerificationForm></Route>

            <Route path="/SignUp">{!user ? <SignUp/> : <Redirect to="/" />}</Route>
            <Route path="/UserType">{!user ? <UserType /> : <Redirect to="/" />}</Route>

  
  
            <Route path="/Volounteer/ProfileV">{user && user.userType==="volounteer" ? <ProfileV></ProfileV>: <Redirect to="/"/> }</Route>
            <Route path="/Volounteer/VuserHome">{user && user.userType==="volounteer" ? <VuserHome></VuserHome>: <Redirect to="/"/> }</Route>
            <Route path="/Volounteer/Settings">{user && user.userType==="volounteer" ? <Settings></Settings>: <Redirect to="/"/> }</Route>

            
            <Route path="/Association/ProfileA">{user && user.userType==="association" ? <ProfileA></ProfileA>: <Redirect to="/"/> }</Route>
            <Route path="/Association/AuserHome">{user && user.userType==="association" ? <AuserHome></AuserHome>: <Redirect to="/"/> }</Route>
            <Route path="/Association/Settings">{user && user.userType==="association" ? <Settings></Settings>: <Redirect to="/"/> }</Route>

          </Switch>
          
        </div>
      </BrowserRouter>
      
  );
}

export default App;
