import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SignUp from "./components/Authentication/SignUp";
import Login from "./components/Authentication/Login";
import WelcomeUser from "./components/HomePage/WelcomeUser";
import AddUserData from "./components/HomePage/AddUserData";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/welcomeuser" component={WelcomeUser} />
          <Route exact path="/adduserdata" component={AddUserData} />
        </Switch>
      </BrowserRouter>
    </div> 
  );
}

export default App;
