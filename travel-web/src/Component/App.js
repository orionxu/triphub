import React from 'react';
import '../App.css';
import HomePage from "./Homepage";
import LoginForm from "./Login";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NaviBar from "./NaviBar"
import RegisterForm from "./Register";
import Maps from "./Maps";
import Profile from "./Profile";
import TourList from "../Component/TourList/index";
import FixedMenuLayout from "./About";

function App() {
  return (
      <Router>
        <div className="App">
            <NaviBar/>
            <Route exact path="/" component={HomePage} />
            <Route path="/LoginForm" component={LoginForm} />
            <Route path="/RegisterForm" component={RegisterForm} />
            <Route path="/maps" component={Maps} />
            <Route path="/profile" component={Profile}/>
            <Route path="/TourList" component={TourList}/>
            <Route path="/FixedMenuLayout" component={FixedMenuLayout}/>
        </div>
      </Router>
  );
}

export default App;
