import Home from "./Pages/Home"; 
import {BrowserRouter, Route, Switch} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact><Home></Home></Route>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
