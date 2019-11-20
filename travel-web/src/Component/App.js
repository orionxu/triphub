import React from 'react';
import '../App.css';
import HomePage from "./Homepage";
import Login from "./Login";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NaviBar from "./NaviBar"
import Register from "./Register";
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
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/maps" component={Maps} />
            <Route path="/profile" component={Profile}/>
            <Route path="/TourList" component={TourList}/>
            <Route path="/FixedMenuLayout" component={FixedMenuLayout}/>
        </div>
      </Router>
  );
}

export default App;
