
import Home from "./Pages/Home"; 
import About from "./Pages/About";
import LogIn from "./Pages/Authentication pages/LogIn";
import SignInV from "./Pages/Authentication pages/SignInV";
import SignInA from "./Pages/Authentication pages/SignInA";
import ForgotPass from "./Pages/Authentication pages/ForgotPass";
import ProfileV from "./Pages/Profiles/ProfileV";
import ProfileA from "./Pages/Profiles/ProfileA";
import {BrowserRouter, Route, Switch} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact><Home></Home></Route>
        <Route path="/About"><About></About></Route>
        <Route path="/LogIn"><LogIn></LogIn></Route>
        <Route path="/SignInV"><SignInV></SignInV></Route>
        <Route path="/SignInA"><SignInA></SignInA></Route>
        <Route path="/ForgotPass"><ForgotPass></ForgotPass></Route>
        <Route path="/ProfileV"><ProfileV></ProfileV></Route>
        <Route path="/ProfileA"><ProfileA></ProfileA></Route>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
