import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

class NaviBar extends Component {
    render() {
        return (
            <nav>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">TripHub</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/homepage">Home</Nav.Link>
                        <Nav.Link href="#">About US</Nav.Link>
                        <Nav.Link href="/loginform">Login</Nav.Link>
                        <Nav.Link href="/registerform">Register</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                <br />
            </nav>
        )
    }
}

export default NaviBar;