import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import NavItem from "react-bootstrap/NavItem"

class NaviBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">TripHub</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink to="/"exact={true} style={{color: '#A9A9A9', textDecoration: 'none', marginRight: 10}} activeStyle={{color: 'yellow', textDecoration: 'none' , marginRight: 10}}>Home</NavLink>
                        <NavLink to="/aboutus" style={{color: '#A9A9A9', textDecoration: 'none', marginRight: 10}} activeStyle={{color: 'yellow', textDecoration: 'none' , marginRight: 10}}>About Us</NavLink>

                    </Nav>
                    <Nav>
                        <NavLink to="/profile" style={{color: '#A9A9A9', textDecoration: 'none', marginRight: 10}} activeStyle={{color: 'yellow', textDecoration: 'none' , marginRight: 10}}>Profile</NavLink>
                        <NavLink to="/Favorites" style={{color: '#A9A9A9', textDecoration: 'none' , marginRight: 10}} activeStyle={{color: 'yellow', textDecoration: 'none' , marginRight: 10}}>Favorites</NavLink>
                        <NavLink to="/loginform" style={{color: '#A9A9A9', textDecoration: 'none', marginRight: 10}} activeStyle={{color: 'yellow', textDecoration: 'none', marginRight: 10}}>Login</NavLink>
                        <NavLink to="/registerform" style={{color: '#A9A9A9', textDecoration: 'none', marginRight: 10}} activeStyle={{color: 'yellow', textDecoration: 'none', marginRight: 10}}>Register</NavLink>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NaviBar;