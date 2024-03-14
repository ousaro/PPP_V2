
import Home from "./Pages/Home"; 
import About from "./Pages/About";
import LogIn from "./Pages/Authentication pages/LogIn";
import SignInV from "./Pages/Authentication pages/SignInV";
import SignInA from "./Pages/Authentication pages/SignInA";
import ForgotPass from "./Pages/Authentication pages/ForgotPass";
import ProfileV from "./Pages/Profiles/ProfileV";
import ProfileA from "./Pages/Profiles/ProfileA";
import Settings from "./Pages/feature pages/Settings";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import AuserHome from "./Pages/Users Home pages/AuserHome"
import VuserHome from "./Pages/Users Home pages/VuserHome";
import UserTypeProvider from "./Contexts/userTypeContext";


function App() {
  return (
    <UserTypeProvider>
      <BrowserRouter>
  
        <div className="App">
          <Switch>
            <Route path="/" exact><Home></Home></Route>
            <Route path="/About"><About></About></Route>

            <Route path="/LogIn"><LogIn></LogIn></Route>
            <Route path="/SignInV"><SignInV></SignInV></Route>
            <Route path="/SignInA"><SignInA></SignInA></Route>
            <Route path="/ForgotPass"><ForgotPass></ForgotPass></Route>

            <Route path="/Volounteer/ProfileV"><ProfileV></ProfileV></Route>
            <Route path="/Volounteer/VuserHome"><VuserHome></VuserHome></Route>

            <Route path="/Association/ProfileA"><ProfileA></ProfileA></Route>
            <Route path="/Association/AuserHome"><AuserHome></AuserHome></Route>

            <Route path="/Settings"><Settings></Settings></Route>

            
          

          </Switch>
          
        </div>
      </BrowserRouter>
    </UserTypeProvider>
  );
}

export default App;
