
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
            <Route path="/" exact><Home></Home></Route>
            <Route path="/About"><About></About></Route>

            <Route path="/ForgotPass"><ForgotPass></ForgotPass></Route>

            <Route path="/Volounteer/LogIn">{!user ? <LogIn></LogIn>: <Redirect to="/Volounteer/ProfileV"/>}</Route>
            <Route path="/SignInV">{!user ? <SignInV></SignInV>: <Redirect to="/Volounteer/ProfileV"/> }</Route>
            <Route path="/Volounteer/ProfileV">{user ? <ProfileV></ProfileV>: <Redirect to="/Volounteer/LogIn"/> }</Route>
            <Route path="/Volounteer/VuserHome">{user ? <VuserHome></VuserHome>: <Redirect to="/Volounteer/LogIn"/> }</Route>
            <Route path="/Volounteer/Settings">{user ? <Settings></Settings>: <Redirect to="/Volounteer/LogIn"/> }</Route>

            <Route path="/Association/LogIn"><LogIn></LogIn></Route>
            <Route path="/SignInA"><SignInA></SignInA></Route>
            <Route path="/Association/ProfileA"><ProfileA></ProfileA></Route>
            <Route path="/Association/AuserHome"><AuserHome></AuserHome></Route>
            <Route path="/Association/Settings"><Settings></Settings></Route>

          </Switch>
          
        </div>
      </BrowserRouter>
      
  );
}

export default App;
