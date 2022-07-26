import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SignUp from "./components/Authentication/SignUp";
import Login from "./components/Authentication/Login";
import WelcomeUser from "./components/HomePage/WelcomeUser";
import AddUserData from "./components/HomePage/AddUserData";
import Navbar from "./components/header/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/welcomeuser" component={WelcomeUser} />
          <Route exact path="/adduserdata" component={AddUserData} />
          <Route exact path="/navbar" component={Navbar} />
        </Switch>
      </BrowserRouter>
    </div> 
  );
}

export default App;
