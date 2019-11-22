import React, {Component} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
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
                        <NavLink to="/"exact={true} style={{color: '#A9A9A9', textDecoration: 'none', marginRight: 10}} activeStyle={{color: 'yellow', textDecoration: 'none' , marginRight: 10}}>Home</NavLink>
                        <NavLink to="/aboutus" style={{color: '#A9A9A9', textDecoration: 'none', marginRight: 10}} activeStyle={{color: 'yellow', textDecoration: 'none' , marginRight: 10}}>About Us</NavLink>
                    </Nav>

                    <Nav>
                        <Button variant="outline-primary" style={{marginRight: 10}}><NavLink to="/profile" style={{color: '#A9A9A9', textDecoration: 'none'}} activeStyle={{color: 'yellow', textDecoration: 'none'}}>Profile</NavLink></Button>
                        <Button variant="outline-primary" style={{marginRight: 10}}><NavLink to="/Favorites" style={{color: '#A9A9A9', textDecoration: 'none'}} activeStyle={{color: 'yellow', textDecoration: 'none'}}>Favorites</NavLink></Button>
                        <NaviBarUser/>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}


export default NaviBar;


