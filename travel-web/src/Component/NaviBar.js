import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import NaviBarUser from "./NaviBarUser";

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
                    <NaviBarUser/>
                </Navbar>
            </div>
        )
    }
}


export default NaviBar;