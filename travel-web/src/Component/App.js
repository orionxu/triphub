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
import Auth from "./require_auth";
import {Component} from "react"
import {Provider} from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router>
                    <div className="App">
                        <NaviBar/>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/maps" component={Maps}/>
                        <Route path="/profile" component={Auth(Profile)}/>
                        <Route path="/TourList" component={TourList}/>
                        <Route path="/FixedMenuLayout" component={FixedMenuLayout}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
