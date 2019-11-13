import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import divWithClassName from "react-bootstrap/esm/utils/divWithClassName"

class NaviBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">TripHub</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#">About US</Nav.Link>
                        <Nav.Link href="/loginform">Login</Nav.Link>
                        <Nav.Link href="/registerform">Register</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>

            </div>
        )
    }
}

export default NaviBar;