import React from 'react';
import '../App.css';
import HomePage from "./Homepage";
import LoginForm from "./Login";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NaviBar from "./NaviBar"
import RegisterForm from "./Register";
import Maps from "./Maps";
import Profile from "./Profile";

function App() {
  return (
      <Router>
        <div className="App">
            <NaviBar/>
            <Route exact path="/" component={HomePage} />
            <Route path="/loginform" component={LoginForm} />
            <Route path="/registerform" component={RegisterForm} />
            <Route path="/maps" component={Maps} />
            <Route path="/profile" component={Profile}/>
        </div>
      </Router>
  );
}

export default App;
