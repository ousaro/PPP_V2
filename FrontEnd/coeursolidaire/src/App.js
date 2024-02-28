
import Home from "./Pages/Home"; 
import About from "./Pages/About";
import LogIn from "./Pages/LogIn";
import SignInV from "./Pages/SignInV";
import SignInA from "./Pages/SignInA";
import ForgotPass from "./Pages/ForgotPass";
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
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
