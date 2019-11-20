import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

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
                        <NavLink to="/" exact={true} style={{color: '#A9A9A9', textDecoration: 'none', marginRight: 10}}
                                 activeStyle={{color: 'yellow', textDecoration: 'none', marginRight: 10}}>Home</NavLink>
                        <NavLink to="/aboutus" style={{color: '#A9A9A9', textDecoration: 'none', marginRight: 10}}
                                 activeStyle={{color: 'yellow', textDecoration: 'none', marginRight: 10}}>About
                            US</NavLink>

                    </Nav>
                    <Nav>
                        <NavLink to="/profile" style={{color: '#A9A9A9', textDecoration: 'none', marginRight: 10}}
                                 activeStyle={{
                                     color: 'yellow',
                                     textDecoration: 'none',
                                     marginRight: 10
                                 }}>Profile</NavLink>
                        <NavLink to="/favorites" style={{color: '#A9A9A9', textDecoration: 'none', marginRight: 10}}
                                 activeStyle={{
                                     color: 'yellow',
                                     textDecoration: 'none',
                                     marginRight: 10
                                 }}>Favorites</NavLink>

                    </Nav>
                    <ButtonToolbar>
                        <Button variant="outline-info" href="/login">Login </Button>
                        <Button variant="outline-info" href="/register">Register </Button>
                    </ButtonToolbar>
                </Navbar>
            </div>
        )
    }
}

export default NaviBar;