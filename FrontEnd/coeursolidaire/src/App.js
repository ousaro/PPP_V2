
import Home from "./Pages/Home"; 
import About from "./Pages/About";
import LogIn from "./Pages/LogIn";
import {BrowserRouter, Route, Switch} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact><Home></Home></Route>
        <Route path="/About"><About></About></Route>
        <Route path="/LogIn"><LogIn></LogIn></Route>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
