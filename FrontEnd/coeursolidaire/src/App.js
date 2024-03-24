
import Home from "./Pages/Home"; 
import About from "./Pages/About";
import LogIn from "./Pages/Authentication pages/LogIn";
import SignInV from "./Pages/Authentication pages/SignInV";
import SignInA from "./Pages/Authentication pages/SignInA";
import ForgotPass from "./Pages/Authentication pages/ForgotPass";
import ProfileV from "./Pages/Profiles/ProfileV";
import ProfileA from "./Pages/Profiles/ProfileA";
import Settings from "./Pages/feature pages/Settings";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import AuserHome from "./Pages/Users Home pages/AuserHome"
import VuserHome from "./Pages/Users Home pages/VuserHome";
import { useAuthContext } from "./Hooks/useAuthContext";

function App() {

  const {user}= useAuthContext()

  return (
    
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact>{!user ? <Home></Home> : user.userType==="volounteer" ? <Redirect to="/Volounteer/ProfileV"/> :<Redirect to="/Association/ProfileA"/>}</Route>
            <Route path="/About"><About></About></Route>

            <Route path="/ForgotPass"><ForgotPass></ForgotPass></Route>

            <Route path="/Volounteer/LogIn">{!user || (user && user.userType==="association") ? <LogIn></LogIn>: <Redirect to="/Volounteer/ProfileV"/>}</Route>
            <Route path="/SignInV">{!user ||( user && user.userType==="association") ? <SignInV></SignInV>: <Redirect to="/Volounteer/ProfileV"/> }</Route>
            <Route path="/Volounteer/ProfileV">{user && user.userType==="volounteer" ? <ProfileV></ProfileV>: <Redirect to="/"/> }</Route>
            <Route path="/Volounteer/VuserHome">{user && user.userType==="volounteer" ? <VuserHome></VuserHome>: <Redirect to="/"/> }</Route>
            <Route path="/Volounteer/Settings">{user && user.userType==="volounteer" ? <Settings></Settings>: <Redirect to="/"/> }</Route>

            <Route path="/Association/LogIn">{!user || (user && user.userType==="volounteer") ? <LogIn></LogIn>: <Redirect to="/Association/ProfileA"/>}</Route>
            <Route path="/SignInA">{!user ||  (user && user.userType==="volounteer") ? <SignInA></SignInA>: <Redirect to="/Association/ProfileA"/> }</Route>
            <Route path="/Association/ProfileA">{user && user.userType==="association" ? <ProfileA></ProfileA>: <Redirect to="/"/> }</Route>
            <Route path="/Association/AuserHome">{user && user.userType==="association" ? <AuserHome></AuserHome>: <Redirect to="/"/> }</Route>
            <Route path="/Association/Settings">{user && user.userType==="association" ? <Settings></Settings>: <Redirect to="/"/> }</Route>

          </Switch>
          
        </div>
      </BrowserRouter>
      
  );
}

export default App;
