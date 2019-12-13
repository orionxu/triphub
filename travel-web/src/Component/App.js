import React from 'react';
import '../App.css';
import HomePage from "./Homepage";
import Login from "./Login";
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import NaviBar from "./NaviBar"
import Register from "./Register";
import Maps from "./Maps";
import Profile from "./Profile";
import TourList from "../Component/TourList/index";
import FixedMenuLayout from "./About";
import {Component} from "react"
import {Provider} from 'react-redux';
import About from "./About";
import Locations from "./TourList/Locations";
import Plan from "./Plan"
import history from "./history"

class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router history={history}>
                    <div className="App">
                        <NaviBar/>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/maps" component={Maps}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/TourList" component={TourList}/>
                        <Route path="/FixedMenuLayout" component={FixedMenuLayout}/>
                        <Route path="/aboutus" component={About}/>
                        <Route path="/locations/:position" component={Locations}/>
                        <Route path="/plan" component={Plan}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
