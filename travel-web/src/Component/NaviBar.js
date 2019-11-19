import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import divWithClassName from "react-bootstrap/esm/utils/divWithClassName"
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class NaviBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/FixedMenuLayout">About US</Nav.Link>
                        <Nav.Link href="/loginform">Login</Nav.Link>
                        <Nav.Link href="/registerform">Register</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                    <ButtonToolbar>
                        <Button variant="outline-info">Login </Button>
                        <Button variant="outline-info">Register </Button>
                    </ButtonToolbar>
                </Navbar>

            </div>
        )
    }
}

export default NaviBar;